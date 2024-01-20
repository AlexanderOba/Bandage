import Image from "next/image"
import bed from "../../../public/bed.png"
import room from "../../../public/room.png"
import kitchen from "../../../public/kitchen.png"
import comment from "../../../public/comment.png"
import time from "../../../public/time.png"
import chevron_right from "../../../public/chevron_right.png"





const FeaturedPost = () => {

    return (
        <div className="px-10 pt-3 pb-[8rem]">
            <div className=" text-center mb-9">
                <p className="text-[#23A6F0] text-[14px] mb-1 font-semibold">Practice Advice</p>
                <h3 className="text-[#252B42] font-bold text-[40px] mb-1">Featured Posts</h3>
            </div>

            <div className="flex justify-center pt-[3.5rem]">
                <div className="flex flex-wrap justify-center pb-4 w-[87%]">

                    <div className="w-[31%] mr-3 mb-8" style={{ boxShadow: "0px 2px 4px 0px #0000001A" }}>

                        <Image src={room} alt="product image" className=" m-auto " width={350} height={350} />
                        <div className="mb-3 p-5">
                            <div className="flex text-[#737373] text-[14px] font-[400] mb-2">
                                <p className="text-[#8EC2F2] mr-3">Google</p>
                                <p className="mr-3">Trending</p>
                                <p>New</p>
                            </div>

                            <p className="text-[#252B42] text-[20px] font-[400] mb-3">Loudest à la Madison #1 (L'integral)!</p>
                            <p className="text-[#737373] text-[14px] font-[400] mb-3 w-[90%]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>

                            <div className="flex justify-between text-[#737373]  text-[12px] mt-6 mb-6">
                                <div className="flex items-center mr-6 ">
                                    <Image src={time} alt="like" width={18} height={18} className="mr-1" />
                                    <span>22 April 2021</span>
                                </div>
                                <div className="flex items-center mr-6">
                                    <Image src={comment} alt="like" width={18} height={18} className="mr-1" />
                                    <span> 10 comments</span>
                                </div>
                            </div>

                            <div className="flex items-center mr-6 text-[#737373] text-[14px] font-semibold cursor-pointer">
                                <span>Learn More</span>
                                <Image src={chevron_right} alt="like" width={10} height={10} className="ml-3" />
                            </div>

                        </div>
                    </div>

                    <div className="w-[31%] mr-3 mb-8" style={{ boxShadow: "0px 2px 4px 0px #0000001A" }}>

                        <Image src={kitchen} alt="product image" className=" m-auto" width={350} height={350} />
                        <div className=" mb-3 p-5">
                            <div className="flex text-[#737373] text-[14px] font-[400]">
                                <p className="text-[#8EC2F2] mr-3">Google</p>
                                <p className="mr-3">Trending</p>
                                <p>New</p>
                            </div>

                            <p className="text-[#252B42] text-[20px] font-[400] mb-3">Loudest à la Madison #1 (L'integral)!</p>
                            <p className="text-[#737373] text-[14px] font-[400] mb-3 w-[90%]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>

                            <div className="flex justify-between text-[#737373]  text-[12px] mt-6 mb-6">
                                <div className="flex items-center mr-6 ">
                                    <Image src={time} alt="like" width={18} height={18} className="mr-1" />
                                    <span>22 April 2021</span>
                                </div>
                                <div className="flex items-center mr-6">
                                    <Image src={comment} alt="like" width={18} height={18} className="mr-1" />
                                    <span> 10 comments</span>
                                </div>
                            </div>

                            <div className="flex items-center mr-6 text-[#737373] text-[14px] font-semibold cursor-pointer">
                                <span>Learn More</span>
                                <Image src={chevron_right} alt="like" width={10} height={10} className="ml-3" />
                            </div>

                        </div>

                    </div>

                    <div className="w-[31%]  mb-8" style={{ boxShadow: "0px 2px 4px 0px #0000001A" }}>

                        <Image src={bed} alt="product image" className="m-auto" width={350} height={350} />
                        <div className=" mb-3 p-5">
                            <div className="flex text-[#737373] text-[14px] font-[400]">
                                <p className="text-[#8EC2F2] mr-3">Google</p>
                                <p className="mr-3">Trending</p>
                                <p>New</p>
                            </div>

                            <p className="text-[#252B42] text-[20px] font-[400] mb-3">Loudest à la Madison #1 (L'integral)!</p>
                            <p className="text-[#737373] text-[14px] font-[400] mb-3 w-[90%]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>

                            <div className="flex justify-between text-[#737373]  text-[12px] mt-6 mb-6">
                                <div className="flex items-center mr-6 ">
                                    <Image src={time} alt="like" width={18} height={18} className="mr-1" />
                                    <span>22 April 2021</span>
                                </div>
                                <div className="flex items-center mr-6">
                                    <Image src={comment} alt="like" width={18} height={18} className="mr-1" />
                                    <span> 10 comments</span>
                                </div>
                            </div>

                            <div className="flex items-center mr-6 text-[#737373] text-[14px] font-semibold cursor-pointer">
                                <span>Learn More</span>
                                <Image src={chevron_right} alt="like" width={10} height={10} className="ml-3" />
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default FeaturedPost;