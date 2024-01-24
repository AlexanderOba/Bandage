import Image from "next/image"
import avatar from "../../../public/avatar.jpg"
import stars from "../../../public/stars.png"
import users from "../../../public/users.png"




const FeedBack = () => {
    return (
        <div>
            <div className="flex justify-center mt-8 mb-32 flex-wrap px-4 md:px-0">
                <div className="md:mr-7 mb-3 md:mb-0 text-center pt-6 ">
                    <h3 className="text-[#252B42] font-bold text-[24px] mb-5">What they say about us</h3>
                    <Image src={avatar} alt="furiniture 1" className="m-auto mb-2" width={90} height={90} />
                    <Image src={stars} alt="furiniture 1" className="m-auto mb-2" width={100} height={100} />
                    <p className="mt-3 text-[#737373] text-[14px] w-[73%] m-auto font-semibold pt-4">Slate helps you see how many more days you need to work to reach your financial goal.</p>
                    <p className="text-[#23A6F0] text-[14px] mt-6 mb-1 font-semibold">Regina Miles</p>
                    <p className="text-[#252B42] text-[14px]  font-semibold">Designer</p>
                </div>

                <div>
                    <div>
                        <Image src={users} alt="furiniture 1" width={420} height={420} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedBack