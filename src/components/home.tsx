"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

export default function HomePage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if(!mounted){
    return <div className="opacity-75 bg-honey-100/75 flex justify-center items-center w-screen h-screen">
      <div className="w-full h-full border flex justify-center items-center">
        Loading.....<Loader />
      </div>
    </div>
  }

  return (
    <div className={cn(
      "h-screen w-screen flex flex-col justify-start items-center",
      "bg-gradient-to-l from-honey-700/70 via-white to-white",
      "dark:bg-gradient-to-l dark:from-honey-700/50 from-5% dark:via-[#0b0b0b] dark:to-[#0b0b0b]"
    )}>
      <div className={cn(
        "w-full max-w-6xl mx-auto h-fit px-10 py-2 flex justify-between items-center bg-transparent"
      )}>
        <span className="text-3xl font-bold tracking-tight">
          Job Bee
        </span>
        <Button variant={"secondary"} onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
        </Button>
        <Button size={"sm"}>Sign up</Button>
      </div>
    </div>
  );
}