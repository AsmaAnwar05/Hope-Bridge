"use client"
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
  return (
    <>
    
    <div className="flex flex-col items-center justify-center h-[44vh] bg-black text-white gap-4">
      <div className="font-bold text-4xl">Home Bridge</div>
        <p>Bridging Hearts – Help Through Donations or Volunteering and Spread Hope to Those in Need. Start now!</p>
        <div className="">
          
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        
        </div>
    </div>
    <div>
      <div className="bg-white h-[1px] opacity-25"></div>
    </div>
    <div className="text-white py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
      <div className="flex gap-5 justify-around">
       <div className="item space-y-3 flex flex-col items-center justify-center">
        <img src="/donation.png" alt="" className="bg-blue-300 rounded-full p-1" width={88} />
        <p className="font-bold text-xl">Help the Needy</p>
        <p>Your small donation can bring a big change.</p>
      </div>
     <div className="item space-y-3 flex flex-col items-center justify-center">
        <img src="/help.png" alt="" className="bg-blue-300 rounded-full p-1" width={88} />
        <p className="font-bold text-xl">Get Help</p>
        <p>Reach out. We’re ready to stand beside you.</p>
      </div> 
      <div className="item space-y-3 flex flex-col items-center justify-center">
        <img src="/volunteer.png" alt="" className="bg-blue-300 rounded-full p-1" width={88} />
        <p className="font-bold text-xl">Join as Volunteer</p>
        <p>Help others, earn experience & recognition</p>
      </div>
      </div>
    </div>
    <div>
      <div className="bg-white h-[1px] opacity-25"></div>
    </div>
    {/* <div className="text-white py-16 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-8">Learn More</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/qPxvmrtTQ_4?si=OpCFf2my2P7W1HNV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    <div>
      <div className="bg-white h-[1px] opacity-25"></div>
    </div> */}
    </>
  );
}
