import React from 'react'
import { NavLink } from "react-router-dom"

function Header() {
    return (

        <div>
            <nav class="bg-white dark:bg-gray-800  ">
                <div class="px-8 mx-auto max-w-7xl">
                    <div class="flex items-center justify-between h-16">
                        <div class=" flex items-center">
                            <NavLink class="flex-shrink-0" href="/">
                                <img class="w-8 h-8" src="https://codexintern.in/assets/codex_ori-DQ4Wj2sy.png" alt="Workflow" />
                            </NavLink>
                            <div class="hidden md:block">
                                <div class="flex items-baseline ml-10 space-x-4">
                                    <NavLink to="/blog" className={({ isActive }) => `${isActive ? "text-red-500" : "text-gray-800"}  font-medium`} href="/#">
                                        Blog
                                    </NavLink>
                                    <NavLink to="/" className={({ isActive }) => ` ${isActive ? "text-red-500" : "text-gray-800"} dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`} href="/#">
                                        Teams
                                    </NavLink>
                                    <NavLink to="/faq" className={({ isActive }) => ` ${isActive ? "text-red-500" : "text-gray-800"} dark:text-white dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium`} href="/#">
                                        FAQ
                                    </NavLink>
                                    <NavLink to="/contact" class="text-gray-800  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/#">
                                        Contact
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div class="block">
                            <div class="flex items-center ml-4 md:ml-6">
                            </div>
                        </div>
                        <div class="flex -mr-2 md:hidden">
                            <button class="text-gray-800 dark:text-white hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
                                <svg width="20" height="20" fill="currentColor" class="w-8 h-8" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="md:hidden">
                    <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Home
                        </a>
                        <a class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Gallery
                        </a>
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Content
                        </a>
                        <a class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/#">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header