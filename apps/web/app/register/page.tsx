import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import FormPage from "./form";
import { Button } from "@repo/ui";

export default async function RegisterPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (

    <div className="flcontainer relative  min-w-[300px] h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0ex">
    <a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 absolute right-4 top-4 md:right-8 md:top-8 border" href="/login" >Login</a>
    <div className="relative hidden justify-center h-full flex-col  bg-gradient-to-r from-violet-500 to-red-400 p-10 pb-10 text-white dark:border-r lg:flex items-center">
        
        <label className="text-8xl font-bold ">EduTrack</label>
        <label className="text-2xl  ">Empowering Education with Smart AI Solutions</label>
    </div>
    <section className="p-8 bg-white h-screen flex items-center justify-center">
      <div className="w-[500px] min-w-[300px]:">
        <FormPage />
      </div>
    </section>
    </div>
  );
}