import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: '*',
}

export function middleware(req: NextRequest) {
  // 環境変数が無い場合は何もしない
  // if (!process.env.NEXT_PUBLIC_BASIC_AUTH_USER) return NextResponse.next()

  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, pwd] = atob(authValue).split(':')

    if (user === process.env.NEXT_PUBLIC_BASIC_AUTH_USER && pwd === process.env.NEXT_PUBLIC_BASIC_AUTH_PASSWORD) {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
  