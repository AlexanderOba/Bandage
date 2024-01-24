import Image from "next/image"
import furniture1 from "../../../public/furniture1.png"
import furniture2 from "../../../public/furniture2.png"
import furniture3 from "../../../public/furniture3.png"
import furniture4 from "../../../public/furniture4.png"




const HeroSection = () => {
    return (
        <div>
            <div className="flex justify-center mt-20 mb-32 flex-wrap px-4 md:px-0">

                <div className="md:mr-3 mr-0 md:w-[31.5%] mb-3">
                    <Image src={furniture1} alt="furiniture 1" width={700} height={700} />
                </div>

                <div className="md:w-[50%] ">
                    <div className="mb-3">
                        <Image src={furniture2} alt="furiniture 1" width={635} height={635} />
                    </div>

                    <div className="flex">
                        <div className="mr-3">
                            <Image src={furniture3} alt="furiniture 1" width={312} height={312} />
                        </div>
                        
                        <div>
                            <Image src={furniture4} alt="furiniture 1" width={312} height={312} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HeroSection