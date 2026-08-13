<<<<<<< HEAD
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4x1 font-bold">Welcome to StudyBoard!</h1>
      <p className="mt-4 text-pink-600">
        Your full-stack TypeScript environment is ready to go.
      </p>
    </main>
  );
}
=======
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
           Welcome to My StudyBoard
          </h1> 
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
           {" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
           
            </a>{" "}
            {" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
           
            </a>{" "}
           
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
       
          >
            
          </a>
        </div>
      </main>
    </div>
  );
}
>>>>>>> 0c3375f6842a5d8133b3181a3dd6fa29acc5852a
