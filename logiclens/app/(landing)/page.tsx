import { Button } from "@/components/ui/button";
import Link from "next/link";
const landing = () => {
    return (
         <div>
                Landing Page (unprotected)  
                
                <Link  href="/dashboard"> 
                <Button>sign in</Button> 
                </Link>
             
              </div>
          );
}
 
export default landing;