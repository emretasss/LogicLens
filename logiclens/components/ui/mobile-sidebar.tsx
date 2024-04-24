"use client";

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet,
     SheetContent,
     SheetTrigger
     } from '@/components/ui/sheet';
import Sidebar from '@/components/ui/sidebar';


const MobileSidebar = () => {
    return ( 
        <Sheet>
            
                
            <SheetTrigger>
        <Button variant="ghost" size="icon" className='md:hidden'  >
        <Menu />
        
        </Button>

            
            </SheetTrigger>

        
         

        </Sheet>
     );
}
 
export default MobileSidebar;