"use client";

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Sheet } from '@/components/ui/sheet';


const MobileSidebar = () => {
    return ( 
        <Sheet>

          <Button variant="ghost" size="icon" className='md:hidden'  >

            <Menu />


        </Button>
        
        </Sheet>
     );
}
 
export default MobileSidebar;