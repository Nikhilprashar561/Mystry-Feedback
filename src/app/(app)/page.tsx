"use client"
import Image from "next/image";
import { toast } from "sonner";


export default function Home() {

  const handleChange = () => {
    toast("Abe Chal Nah Chutiye Kya Dekh Raha Hai BSDK", {
       description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.log("Undo"),
          },
    })
  }

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-center">Hello Nikhil Bro</h1>
      <button className="py-2 px-6 rounded-2xl cursor-pointer border border-[#262626]" onClick={handleChange}>Abe Chal Nah</button>
    </div>
  );
}


// https://github.com/hiteshchoudhary/ama-app