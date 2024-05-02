"use client";
import * as z from "zod";
import { Heading } from '@/components/header';
import { MessageSquare } from 'lucide-react';
import { useForm} from 'react-hook-form';

import {zodResolver} from  "@hookform/resolvers/zod"
import { useRouter } from "next/navigation";
import ChatCompletionRequestMessage from "openai";
import { formSchome } from "./constans";
import { Button } from "@/components/ui/button";

import { Form,
    FormControl,
    FormField,
     FormItem
    
    } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import axios from "axios"



const conversation = () => {
            const router =useRouter();
            const [Messages,setMessages]=useState<ChatCompletionRequestMessage[]>([]);

         const form =useForm<z.infer<typeof formSchome>>({
            resolver:zodResolver(formSchome),
            defaultValues: {
                prompt:""
            }
        }); 

        const isLoading =form.formState.isSubmitting;

        const onSubmit=async(values :z.infer<typeof formSchome>)=>{
                try {
                    const userMessage: ChatCompletionRequestMessage ={
                        role:"user",
                        content:values.prompt,

                    };
                    const newMessages=[...Messages,userMessage];
                    const response = await axios.post("/api/conversation" ,{
                        Messages:newMessages,
                    })
                    setMessages((current) => [...current,userMessage,response.data])
                    form.reset();
                } catch (error: any) {
                    
                } finally{
                }

             };

    return (  
        
   
    <div>
      
        <Heading title={'Conversation'}
         description={'Our most advanced conversation model.'} 
         icon={MessageSquare} 
        iconColor="text-violet-500"
        bgColor='bg-violet-500/10'
        />
        <div className="px-4 lg:px-8">
        <div>
            <Form  {...form}>  
                <form   onSubmit={form.handleSubmit(onSubmit)} 
                className="rounded-lg
                border
                w-full
                p-4
                px-3
                md:px-6
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
                
                "
                > 
                    <FormField 
                    name="prompt"
                    render={({ field } ) => (
                        <FormItem className="col-span-12
                        lg:col-span-10
                        " >
                            <FormControl className="m-0 p-0">

                            <Input className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent " 
                            
                                disabled={isLoading}
                                placeholder="how do I calculate the radius of the circle?"
                                {...field}
                            />


                            </FormControl>
                        </FormItem>
                    ) }
                    />

                   <Button className="col-span-12 lg:col-span-2" 
                    disabled={isLoading} 
                   >
                     Generate
                   </Button>
                
                </form>

            </Form>
        </div>
        <div className="space-y-4 mt-4">
                Messages content
        </div>
        </div>
        
        
    </div>
     );
}
 
export default conversation;