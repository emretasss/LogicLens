import { authMiddleware } from "@clerk/nextjs";

//22.17 
export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/"],
};
