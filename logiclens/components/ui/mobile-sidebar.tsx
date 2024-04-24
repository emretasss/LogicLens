"use client";

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet,
     SheetContent,
     SheetTrigger
     } from '@/components/ui/sheet';
import Sidebar from '@/components/ui/sidebar';



//24.9rem (360px) is the width of the sidebar in our design system
const MobileSidebar = () => {
    return ( 
        <Sheet>
            
                
            <SheetTrigger>
        <Button variant="ghost" size="icon" className='md:hidden'  >
        <Menu />
        
        </Button>

            
            </SheetTrigger>

            <SheetContent side="left" className="p-0" > 
            <Sidebar/>
            </SheetContent>
        </Sheet>
     );
}
 
export default MobileSidebar;