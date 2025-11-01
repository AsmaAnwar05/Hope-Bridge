"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link";
const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className="navbar bg-gray-800 text-white flex justify-between items-center px-4 h-12">
      <Link href="/" className="logo font-bold text-lg">Home Bridge</Link>
      {/* <ul className="flex justify-between gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Project</li>
            <li>Sign Up</li>
            <li>Login</li>
        </ul> */}

      <div className="relative">

        {session &&
          <><button onClick={() => setshowdropdown(!showdropdown)} id="dropdownInformationButton" data-dropdown-toggle="dropdownInformation" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-gradient-to-l focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm text-center mx-2 px-5 py-2.5  inline-flex items-center" type="button">Welcome {session.user.name} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

            <div id="dropdownInformation" className={`z-10 ${showdropdown ? "" : "hidden"} absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600`}>
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>{session.user.name}</div>
                <div className="font-medium truncate">{session.user.email}</div>
              </div>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                <li>
                  <Link href="/Home_Page" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home Page</Link>
                </li>
                <li>
                  <Link href={`/${encodeURIComponent(session?.user?.name || "username")}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                </li>
                 <li>
                  <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</Link>
                </li>
              </ul>
              <div className="py-2">
          <button
    onClick={() => signOut({ callbackUrl: '/login' })}
    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
  >
    Sign out
  </button>
              </div>
            </div></>
        }

        {!session && <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-r from-purple-500 to-cyan-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center mx-2">Login</button>
        </Link>}
      </div>
    </nav>
  )
}

export default Navbar
