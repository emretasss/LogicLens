import { Heading } from '@/components/header';
import { MessageSquare } from 'lucide-react';




const conversation = () => {
    return (  
    
    <div>
      
        <Heading title={'Conversation'}
         description={'Our most advanced conversation model.'} 
         icon={MessageSquare} 

         >
            
        </Heading>
        
    </div>
     );
}
 
export default conversation;