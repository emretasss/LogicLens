import { clerkMiddleware } from "@clerk/nextjs/server";
 
export default clerkMiddleware({
  publicRoute: ["/"]
});
 
export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};