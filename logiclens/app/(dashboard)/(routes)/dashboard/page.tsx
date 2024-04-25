"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MessageSquare } from "lucide-react";


const tools=[
  {
    label:" Conversation",
    icon:MessageSquare,
    color:" text-violet-500 ",
    bgColor:"bg-violet-500/100",
    href:"/conversation"
  }
]

const DashboardPage = () => {




  return (
    <div  className="mb-8 space-y-4">
    <h1 className="text-2xl md:text-4xl font-bold text-center">Explore the powe of AI</h1>
    <p className="text-muted-foreground font-ligt   text-sm md:text-lg text-center ">
      Chat with the smartest AI -Experience the power of AI
    </p>
    <div className="px-4 md:px-20  lg:px-32 spacce-y-4">

              
        
     {

      tools.map((tool) =>(
        <Card key={tool.href}  
        className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
        > 
        <div className="flex items-center gap-x-4">
        <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>


        </div>
        </div>



        </Card>
      ))


     }
      
      
     
        
    
    </div>
    </div>
    );
}
export default DashboardPage ;
  