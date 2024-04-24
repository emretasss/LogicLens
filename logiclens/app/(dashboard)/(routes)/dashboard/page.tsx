"use client";

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
      tools.map((tool)=(


      )
      
      );
        
    }
    </div>
    </div>
    );
}
export default DashboardPage ;
  