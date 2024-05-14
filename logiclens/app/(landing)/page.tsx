import { Button } from "@/components/ui/button";
import Link from "next/link";
const landing = () => {
    return (
         <div>
                Landing  (unprotected)  
                
                <Link  href="/sign-in"> 
                <Button>login</Button> 
                </Link>


                <Link  href="/sign-up"> 
                <Button>Register</Button> 
                </Link>
              </div>
          );
}
 
export default landing;
