"use client"

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { UserModal } from "@/components/UserModal"


export default function Home() {
  // const [open, setOpen] = useState(false);
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">



        <Button>Click me</Button>
        <UserModal //open={open} setOpen={setOpen} 
        />
        <div className="flex gap-4 items-center flex-col sm:flex-row">

        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

        { //  className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        }


      </footer>
    </div>
  );
}
