
import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import {Configuration , OpenAIApi} from 'openai';

const configuration=new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
});

const openai=new OpenAIApi(configuration);


export async function POST(
    req:Request



)
 {
    try{
        const {userId} = auth();
        const body= await req.json();
        const { messages } =body;

        if(!userId){
            return new NextResponse("Unauthorized", { status :401 })
        }
    }
    catch(error) {
        console.log("[CONVERSATİON_ERROR]",error);
        return new NextResponse(" Internal error ", {status : 500});
    }

}