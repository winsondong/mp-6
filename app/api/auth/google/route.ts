import { NextResponse } from 'next/server';

export async function GET() {
  const clientId   = process.env.GOOGLE_CLIENT_ID;
  const callback   = process.env.REDIRECT_URI;
  if (!clientId || !callback) {
    console.error('Missing GOOGLE_CLIENT_ID or REDIRECT_URI');
    return new NextResponse('Configuration error', { status: 500 });
  }

  // helper to build query strings
  const buildQuery = (params: Record<string,string>) =>
    new URLSearchParams(params).toString();

  
  const oauthURL = [
    'https://accounts.google.com/o/oauth2/v2/auth',
    '?',
    buildQuery({
      client_id:     clientId,
      redirect_uri:  callback,
      response_type: 'code',
      scope:         ['openid','email','profile'].join(' '),
      access_type:   'offline',
      prompt:        'select_account',
    })
  ].join('');

  // send browser off to Google
  return NextResponse.redirect(oauthURL);
}
