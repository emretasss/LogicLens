import Link from 'next/link';
"use client";

const Sidebar = () => {
    return ( 

        <div className="space-y-4 py-4 flex flex-col h-full
        bg-[#111827] text-white">

            <div>
            <Link href="/dashboard" >
            logo
            </Link>
            
            </div>


        </div>
     );
}
 
export default Sidebar;