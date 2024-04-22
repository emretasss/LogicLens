import { authMiddleware } from "@clerk/nextjs";


//middle function to check if user is authenticated or not. If the user is authenticated, it will allow them to access the page otherwise redirect them 
export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
