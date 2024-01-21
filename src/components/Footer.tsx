import Image from "next/image"
import { FaFacebook } from "react-icons/fa"
import { SlSocialInstagram } from "react-icons/sl"
import { TiSocialTwitter } from "react-icons/ti"





const Footer = () => {
    return (
        <div>
            <div className="px-[11.5rem] bg-[#FAFAFA] pt-5 pb-1">
                <div className="flex justify-between pt-8 pb-[4rem] border-[#E6E6E6] border-b">
                    <div className="text-[#252B42] text-[24px] font-[700] w-[20%]">
                        Bandage
                    </div>
                    <div className="flex items-center text-[#23A6F0] text-[24px]">
                        <FaFacebook className=" mr-4 rounded-sm" />
                        <SlSocialInstagram className=" mr-4 rounded-sm text-[20px] pb-" />
                        <TiSocialTwitter className="text-[30px]" />
                    </div>
                </div>
            </div>

            <div className="pl-[11.5rem] pr-28 pt-14 flex md:w-full w-[66%] gap-10 justify-between">
                <div className='flex flex-col md:mb-5'>
                    <header className='text-[16px] text-[#252B42] font-bold mb-6'>Company Info</header>
                    <p className="mb-4 text-[#737373] text-[14px] font-bold">About Us</p>
                    <p className="mb-4 text-[#737373] text-[14px] font-bold ">We are hiring</p>
                    <p className="mb-4 text-[#737373] text-[14px] font-bold ">Blog</p>
                </div>

                <div className='flex flex-col md:mb-5'>
                    <header className='text-[16px] text-[#252B42] font-bold mb-6'>Legal</header>
                    <p className="mb-4 text-[#737373] text-[14px] font-bold">About Us</p>
                    <p className="mb-4 text-[#737373] text-[14px] font-bold ">We are hiring</p>
                    <p className="mb-4 text-[#737373] text-[14px] font-bold ">Blog</p>
                </div>

                <div className='flex flex-col md:mb-5  w-[16%]'>
                    <header className='text-[16px] text-[#252B42] font-bold mb-6'>Features</header>
                    <p className="mb-4 text-[#737373] text-[14px] font-bold">Business Marketing</p>
                    <p className="mb-4 text-[#737373] text-[14px] font-bold ">User Analytic</p>
                    <p className="mb-4 text-[#737373] text-[14px] font-bold ">Live Chat</p>
                    <p className="mb-4 text-[#737373] text-[14px] font-bold ">Unlimited Support</p>
                </div>

                <div className='flex flex-col md:mb-5  w-[12%]'>
                    <header className='text-[16px] text-[#252B42] font-bold mb-6'>Resources</header>
                    <p className="mb-4 text-[#737373] text-[14px] font-bold">IOS & Android</p>
                    <p className="mb-4 text-[#737373] text-[14px] font-bold ">Watch a Demo</p>
                    <p className="mb-4 text-[#737373] text-[14px] font-bold ">API</p>
                </div>

                <div className='flex flex-col md:mb-5 w-[32%]'>
                    <header className='text-[16px] text-[#252B42] font-bold mb-6'>Get In Touch</header>
                    <div className='mt-4 mb-2 flex items-center gap-0 justify-center'>
                        <input
                            type='text'
                            className='px-5 py-4 w-[67%] placeholder:text-sm placeholder:text-[#737373] placeholder:font-semibold focus:ring-[#E6E6E6] text-[#737373] border-[#E6E6E6] bg-[#F9F9F9] focus:outline-none border-2 rounded-s-md'
                            placeholder='Your Email'
                        />
                        <button
                            type='submit'
                            className='px-5 py-4 text-white bg-[#23A6F0] border-[#23A6F0] border-y-2 rounded-e-[4px]'
                        >
                            Subscribe
                        </button>
                    </div>
                    <p className="mb-4 text-[#737373] text-[12px]">Lore imp sum dolor Amit</p>
                </div>
            </div>

            <div className="px-[11.5rem] bg-[#FAFAFA] pt-7 pb-7">
                <div className="text-[#737373] text-[14px] font-[700]">
                    Made With Love By Finland All Right Reserved
                </div>
            </div>
        </div>
    )
}

export default Footer