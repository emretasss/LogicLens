"use client";
import * as z from "zod";
import { Heading } from '@/components/header';
import { useForm} from 'react-hook-form';
import { MessageSquare } from 'lucide-react';
import {zodResolver} from  "@hookform/resolvers/zod"
import { formSchome } from "./constans";






const conversation = () => {
         const form =useForm<z.infer<typeof formSchome>>({
            resolver:zodResolver(formSchome),
            defaultValues: {
                prompt:""
            }
        }); 

        const isLoading =form.formState.isSubmitting;


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