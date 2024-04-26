import { LucideIcon } from "lucide-react";

interface   HeadingProps{
    title :string ;
    description:string;
    icon:LucideIcon;
    iconColor?:string;
    bgColor?:string;
}



export const heading = ( {
    title,
    description,
 
    bgColor

}:HeadingProps) => {


    return ( <div>
        heading component
            
    </div> );
}
 
