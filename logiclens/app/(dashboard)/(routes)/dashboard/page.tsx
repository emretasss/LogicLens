"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MessageSquare,ArrowRight,Music,Image,Code,Video } from "lucide-react";


const tools=[
  {
    label:" Conversation",
    icon:MessageSquare, 
    color:" text-violet-500 ",
    bgColor:"bg-violet-500/100",
    href:"/conversation"
  },
  {
    label:" Music Generation",
    icon:Music,
    color:" text-emerald-500 ",
    bgColor:"bg-emerald-500/100",
    href:"/music"
  },
  {
    label:" Image Generation",
    icon:Image,
    color:" text-pink-700 ",
    bgColor:"bg-pink-700/100",
    href:"/image"
  },
  {
    label:"Video Generation",
    icon:Video,
    color:" text-orange-500 ",
    bgColor:"bg-orange-500/100",
    href:"/video"
  },
  {
    label:"Code",
    icon:Code,
    color:" text-violet-500 ",
    bgColor:"bg-violet-500/100",
    href:"/code"
  },
  
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
        <div className={cn("p-2 w-fit rounded-md", tool.color)}>

        <tool.icon  />
        </div> 
        <div className="font-semibold">
        {tool.label}
       
        </div> 
        </div>
       <ArrowRight className="w-5 h-5" />


        </Card>
      ))


     }
      
      
     
        
    
    </div>
    </div>
    );
}
export default DashboardPage ;
  