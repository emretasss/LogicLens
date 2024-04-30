
import {Configuration , OpenAIApi} from 'openai';

const configuration=new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
});

const openai=new OpenAIApi(configuration);


export async function POST(
    req:Request
) {
    try{

    }
    catch(error) {
        console.log("[CONVERSATİON_ERROR]",error);
    }

}