"use client"
import React from 'react'
import { useSession } from "next-auth/react"

const Username = ({ params }) => {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (!session) {
    return <div>Please log in to see this page.</div>
  }

  return (
    <div className="">

      <div className="w-full">
        <div className="relative">

       
        {/* Profile Picture */}
        {session.user?.image ? (
          <img
            src={session.user.image}
            alt="User Profile"
            className="cover object-cover w-full h-96"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-gray-400 flex items-center justify-center text-white">
            {session.user?.name?.[0] || "U"}
          </div>
        )}

        <div className="profile flex absolute -bottom-32 left-20 ">
          {session.user?.image ? (
          <img
            src={session.user.image}
            alt="User Profile"
            className="w-44 h-44 rounded-full border-[4px] border-white"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center text-white">
            {session.user?.name?.[0] || "U"}
          </div>
        )}
        <div className="mt-16 ml-4">
          <p className="text-4xl font-bold">{session.user?.name}</p>
          <p className="text-[16px] text-gray-300 ">100 follower . 20 following</p>
          <p className="text-[16px] text-gray-300">Donated 121 times</p>
        </div> 
        </div>
      </div>
       </div>
    </div>
  )
}

export default Username
