import Image from "next/image"
import growth from "../../../public/growth.svg"
import wins from "../../../public/wins.svg"
import concrete from "../../../public/concrete.svg"



const ServiceList = () => {

    return (
        <div className="px-10 pt-3 pb-[8rem]">
            <div className=" text-center mb-9">
                <p className="text-[#737373] text-[20px] mb-1 font-semibold">Featured Products</p>
                <h3 className="text-[#252B42] font-bold text-[24px] mb-1">THE BEST SERVICES</h3>
                <p className="text-[#737373] text-[14px] font-semibold">Problems trying to resolve the conflict between  </p>
            </div>
            <div className="flex justify-center pt-[3.5rem]">
                <div className="flex flex-wrap justify-around pb-4 w-[87%]">
                    <div className="w-[21%] mb-8">
                        <Image src={wins} alt="product image" className="mb-7 m-auto " width={70} height={70} />
                        <div className=" text-center mb-3">
                            <h3 className="text-[#252B42] font-bold text-[24px] mb-3">Easy Wins</h3>
                            <p className="text-[#737373] text-[14px] font-semibold mb-3">Get your best looking smile now!</p>
                        </div>
                    </div>
                    <div className="w-[21%] mb-8">
                        <Image src={concrete} alt="product image" className="mb-7 m-auto" width={70} height={70} />
                        <div className=" text-center mb-3">
                            <h3 className="text-[#252B42] font-bold text-[24px] mb-3">Concrete</h3>
                            <p className="text-[#737373] text-[14px] font-semibold mb-3">Defalcate is most focused in helping you discover your most beautiful smile</p>
                        </div>
                    </div>
                    <div className="w-[21%] mb-8">
                        <Image src={growth} alt="product image" className="mb-7 m-auto" width={70} height={70} />
                        <div className=" text-center mb-3">
                            <h3 className="text-[#252B42] font-bold text-[24px] mb-3">Hack Growth</h3>
                            <p className="text-[#737373] text-[14px] font-semibold mb-3">Overcame any hurdle or any other problem.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceList;