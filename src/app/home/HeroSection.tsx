import Image from "next/image"
import furniture1 from "../../../public/furniture1.png"
import furniture2 from "../../../public/furniture2.png"
import furniture3 from "../../../public/furniture3.png"
import furniture4 from "../../../public/furniture4.png"




const HeroSection = () => {
    return (
        <div>
            <div className="flex justify-center mt-20 mb-32 flex-wrap">
                <div className="mr-3">
                    <Image src={furniture1} alt="furiniture 1" width={420} height={420} />
                </div>

                <div>
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