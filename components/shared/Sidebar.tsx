"use client"

import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const Sidebar = () => {

  const pathname = usePathname();


  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col ">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/Logo-removebg-preview.png" alt="logo" width={55} height={50} className=" pb-0 mb-0 " />
          <Image src="/assets/images/logo_logo.png" alt="logo" width={160} height={90}  />
        </Link>

        <nav className="sidebar-nav">

          <SignedIn>
            
            <ul className="m-4 flex flex-col gap-4">

              {/* this is a map over functionality */}
              {/* we will use this whenever we need  */}


              {navLinks.slice(0,6).map((link)=>{
                const isActive = link.route === pathname

                return(

                  <li 
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white':'text-gray-700'
                  }`}
                  >
                    <Link  className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />

                      {link.label}

                    </Link>
                  </li>

                )
              })}

            </ul>
          <ul className=" flex flex-col gap-4 m-4">

            {navLinks.slice(6).map((link)=>{
                const isActive = link.route === pathname

                return(
                  <li 
                  key={link.route}
                  className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white':'text-gray-700'
                  }`}
                  >
                    <Link  className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />

                      {link.label}

                    </Link>
                  </li>

                )
              })}
               <li className="flex-center cursor-pointer gap-2  py-4">
                <UserButton afterSignOutUrl="/" showName/>
               </li>
            </ul>
           
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover mr5">
              <Link href="/sign-in">login</Link>
            </Button>
          </SignedOut>

        </nav>
      </div>
    </aside >
  )
}

export default Sidebar