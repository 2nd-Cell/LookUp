import React from 'react'
import Link from 'next/link'
import { TwitterIcon, GithubIcon, LinkedinIcon } from './icons'

export const Footer = () => {
    return (
        <footer className="bg-[#0e2332]">

            <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 justify-center gap-y-1 md:gap-4 px-4 py-0">

                <div className="p-6">
                    <Link href={"/"}><div className="font-bold text-lg md:text-2xl text-blue-500 mb-2">LookUp</div></Link>
                    <div className="text-[#869198] text-sm md:text-base">The Answer to "Where Do I Find Answers?"</div>
                </div>

                <div className="p-6">
                    <div className="text-base md:text-lg mb-2 text-gray-300">Company</div>
                    <div className="text-[#869198] text-sm md:text-base">About Us</div>
                    <div className="text-[#869198] text-sm md:text-base">FAQ</div>
                </div>

                <div className="p-6">
                    <div className="text-base md:text-lg mb-2 text-gray-300">Resources</div>
                    <div className="text-[#869198] text-sm md:text-base">Community Guidelines</div>
                    <div className="text-[#869198] text-sm md:text-base">Support Center</div>
                    <div className="text-[#869198] text-sm md:text-base">Privacy Policy</div>
                </div>

                <div className="p-6">
                    <div className="text-base md:text-lg mb-2 text-gray-300">Connect</div>
                    <div className='flex gap-1'>
                        <div className="text-[#869198]"><TwitterIcon /></div>
                        <div className="text-[#869198]"><GithubIcon /></div>
                        <div className="text-[#869198]"><LinkedinIcon /></div>
                    </div>
                </div>

            </div>

            <div className='bg-gray-700 mx-[2vw] h-[0.1vh]'></div>

            <div className='my-3 text-[#869198] text-xs flex justify-center'>&copy; 2025 LookUp. All rights reserved.</div>

        </footer>
    )
}
