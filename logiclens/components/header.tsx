import { LucideIcon } from "lucide-react";

interface   HeadingProps{
    title :string ;
    description:string;
    icon:LucideIcon;
    iconColor?:string;
    bgColor?:string;
}



export const Heading = ( {
    title,
    description,
    icon,
    iconColor,
    bgColor

}:HeadingProps) => {


    return (
        <>
        
     <div  className="px-4 lg:px-8 flex items-center gap-x-3 mb-8" >
        heading component
            
    </div> 

    </>
    
    );
}
 
