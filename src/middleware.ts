import NextAuth from "next-auth";
import authConfig from "@/auth.config";
const { auth } = NextAuth(authConfig);
import { apiAuthRoute, authRoute, DEFAULT_LOGIN_REDIRECT, publicRoute } from "@/route";

const publicRoutePatterns = [
   ...publicRoute,
   /^\/location\/.*$/ // Matches any route that starts with /location/
 ];
export default auth((req) => {
  const {nextUrl}  = req;
  const isLoggedIn = !!req.auth;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthRoute);
  const isPublicRoute = publicRoutePatterns.some(route => 
   typeof route === 'string' ? nextUrl.pathname === route : route.test(nextUrl.pathname)
 );
  const isAuthRoute = authRoute.includes(nextUrl.pathname);
  //Do Not Change the order of the below id conditions. 

  if (isApiAuthRoute) {
    return;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL('/login', nextUrl));
  }

  return;
});

export const config = {
   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
};