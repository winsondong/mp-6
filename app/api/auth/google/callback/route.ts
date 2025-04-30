import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const parsedUrl = new URL(req.url);
    const code = parsedUrl.searchParams.get("code");
    if (!code) {
      return NextResponse.json(
        { error: "Missing authorization code" },
        { status: 400 }
      );
    }

    const {
      GOOGLE_CLIENT_ID: clientId,
      GOOGLE_CLIENT_SECRET: clientSecret,
      REDIRECT_URI: redirectUri,
    } = process.env;
    if (!clientId || !clientSecret || !redirectUri) {
      console.error("OAuth settings are incomplete");
      return NextResponse.json(
        { error: "Server not configured correctly" },
        { status: 500 }
      );
    }

    const tokenParams = new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    });

    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: tokenParams.toString(),
    });

    const tokenData = await tokenRes.json();
    if (!tokenRes.ok || !tokenData.access_token) {
      console.error("Could not retrieve access token");
      return NextResponse.json(
        { error: "Failed to get access token" },
        { status: 500 }
      );
    }

    const profileRes = await fetch(
      "https://www.googleapis.com/oauth2/v3/userinfo",
      {
        headers: { Authorization: `Bearer ${tokenData.access_token}` },
      }
    );
    const profile = await profileRes.json();
    if (!profileRes.ok) {
      console.error("Could not load user profile");
      return NextResponse.json(
        { error: "Failed to fetch user profile" },
        { status: 500 }
      );
    }

    const homeUrl = new URL("/", parsedUrl.origin);
    homeUrl.searchParams.set("name", profile.name);
    homeUrl.searchParams.set("email", profile.email);
    homeUrl.searchParams.set("picture", profile.picture);

    return NextResponse.redirect(homeUrl);
  } catch (err) {
    console.error("Error during OAuth callback:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
