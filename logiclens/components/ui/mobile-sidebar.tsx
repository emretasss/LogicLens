"use client";

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet, SheetTrigger } from '@/components/ui/sheet';


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