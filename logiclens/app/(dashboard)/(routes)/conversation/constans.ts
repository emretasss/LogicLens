import * as z from "zod";

export const formSchome =z.object({
    prompt:z.string().min(1,{
        message:"propmt is required"
    
    }
        
        )
});

