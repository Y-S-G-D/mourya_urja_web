
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { CookiesManger } from './utils/cookies-manager'
// import { cookies } from 'next/headers'


// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const access_token = request.cookies.get('access_token')
  const role = request.cookies.get('role')
  const url = request.nextUrl.pathname


  const response = NextResponse.next();

  if(!url.startsWith('/login') && access_token){
    if(!(await CookiesManger.getInstance().verifyToken(access_token.value))){
      response.cookies.set('access_token', '', { expires: new Date(0) });
      response.cookies.set('role', '', { expires: new Date(0) });
    }else{
      console.log("Token verfied")
    }
  }

  /// restrict user to access all routes without login 
  /// don't restrict user to access login, and / page
  // if role is 
  if(!access_token && (url.startsWith('/browse-profile') || url.startsWith('/connections') || url.startsWith('/favourites') || url.startsWith('/user-profile'))){
    return NextResponse.redirect(new URL("/login", request.url))
  } 

  


 
  if(access_token && role && url.startsWith('/login')){

    if(role.value === 'admin'){
      
      return NextResponse.redirect(new URL("/admin",request.url))
    }
    if(role.value === 'employee'){
      return NextResponse.redirect(new URL("/admin",request.url))
    }
    if(role.value === 'user'){
      return NextResponse.redirect(new URL("/",request.url))
    }
  }

  if(!access_token && (url.startsWith('/admin')|| url.startsWith('/management'))){
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // if((url.startsWith('/admin') || url.startsWith("/employee")) && access_token){
    

  // }
  
  // console.log(access_token,role,url)



  return response;
}
export const config = {
    matcher: ['/','/login','/admin/:path*','/management/:path*', '/browse-profile/:path*','/connections/:path*','/favourites/:path*','/user-profile/:path*'],
  };