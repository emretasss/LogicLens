"use client";

import { Heading } from '@/components/header';
import { useForm} from 'react-hook-form';
import { MessageSquare } from 'lucide-react';




const conversation = () => {
         const form =useForm({
            defaultValues: {
                prompt:""
            }
        }); 
    return (  
   
    <div>
      
        <Heading title={'Conversation'}
         description={'Our most advanced conversation model.'} 
         icon={MessageSquare} 
        iconColor="text-violet-500"
        bgColor='bg-violet-500/10'
        />
            
        
        
    </div>
     );
}
 
export default conversation;