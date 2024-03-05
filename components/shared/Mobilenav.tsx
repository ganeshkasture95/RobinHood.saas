"use client"

import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"

const Mobilenav = () => {
    const pathname = usePathname();
    return (
        <header className="header">
            <Link href="/" className="flex items-center gap-2 md:py-2 ">
                <Image src="/assets/images/Logo-removebg-preview.png" alt="logo" width={27} height={25} />
                <Image src="/assets/images/logo_logo.png" alt="logo" width={160} height={40} className=" pb-0 mb-0  mr-28 " />
                <nav className="flex gap-2">
                    <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                        <Sheet>
                            <SheetTrigger>
                                <Image src="/assets/icons/menu.svg" alt="menu" width={32} height={32} />
                            </SheetTrigger>
                            <SheetContent className="sheet-content sm:w-64">
                                <>
                                    <Image src="/assets/images/logo-text.svg" alt="logo" width={152} height={23} />
                                    <ul className="header-nav_elements">

                                        {/* this is a map over functionality */}
                                        {/* we will use this whenever we need  */}


                                        {navLinks.map((link) => {
                                            const isActive = link.route === pathname

                                            return (

                                                <li
                                                    key={link.route}
                                                    className={`${isActive && 'gradient-text'} p-18 flex  whitespace-nowrap text-dark-700`}>

                                                    <Link className="sidebar-link cursor-pointer" href={link.route}>
                                                        <Image
                                                            src={link.icon}
                                                            alt="logo"
                                                            width={24}
                                                            height={24}
                                                        // className={`${isActive && 'brightness-200'}`}
                                                        />

                                                        {link.label}
                                                    </Link>

                                                </li>

                                            )
                                        })}

                                    </ul>
                                    
                                </>

                            </SheetContent>
                        </Sheet>

                    </SignedIn>

                    <SignedOut>
                        <Button asChild className="button bg-purple-gradient bg-cover mr5">
                            <Link href="/sign-in">login</Link>
                        </Button>

                    </SignedOut>
                </nav>
            </Link>
        </header>
    )
}

export default Mobilenav