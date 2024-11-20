
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const access_token = request.cookies.get('access_token')
  const role = request.cookies.get('role')
  const url = request.nextUrl.pathname

  console.log("Role ",role?.value)
  console.log("URL ",url)
  console.log("access_token ",access_token)
  if(access_token && role && url.startsWith('/login')){
    if(role.value === 'admin'){
      
      return NextResponse.redirect(new URL("/admin",request.url))
    }
    if(role.value === 'management'){
      return NextResponse.redirect(new URL("/management",request.url))
    }
    if(role.value === 'user'){
      return NextResponse.redirect(new URL("/",request.url))
    }
  }

  console.log(access_token,role,url)



  return NextResponse.next()
}
export const config = {
    matcher: ['/login','/admin/:path*','/management/:path*'],
  };