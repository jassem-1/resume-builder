import { SignIn } from "@clerk/nextjs";

export default function page() 
{ 
    return ( 
    <main className="flex h-screen justify-center items-center"> 
        <SignIn/>
     </main> 
)


} 