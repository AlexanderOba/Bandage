import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { GoChevronRight } from "react-icons/go";
import Image from "next/image";
import Link from "next/link";
import carousel from "../../../public/carousel.png"
import reviews from "../../../public/reviews.png"
import product_colors from "../../../public/product_colors.png"
import more from "../../../public/more.png"
import likee from "../../../public/likee.png"
import basket from "../../../public/basket.png"
import child_images from "../../../public/child_images.png"
import purplechair from "../../../public/purplechair.png"
import lyft from "../../../public/lyft.png"
import robot from "../../../public/robot.png"
import stripe from "../../../public/stripe.png"
import leaf from "../../../public/leaf.png"
import aws from "../../../public/aws.png"
import hooli from "../../../public/hooli.png"
import ProductList from "../home/ProductList";




export default function Shop() {
  return (
    <main>
      <Header isCompact={true} />
      <div className="bg-[#FAFAFA] px-[11.5rem] pb-7">
        <div className="flex text-[#737373]  text-[14px] items-center  pt-8 pb-7 font-[600]">
          <Link href="/"> <p className="mr-3 text-[#252B42] font-bold">Home</p></Link>
          <GoChevronRight className="mr-3 text-[#BDBDBD] text-[23px] font-normal" />
          <p className="text-[#BDBDBD]">Shop</p>
        </div>

        <div className="flex">
          <div className="w-[51%]">
            <Image src={carousel} alt="furiniture 1" width={500} height={500} />
          </div>
          <div className="pl-12 pt-2 w-[45%]">
            <div className=" border-b mb-7">
              <p className="mr-3 text-[#252B42] text-[20px] font-normal mb-3">Floating Phone</p>
              <Image src={reviews} alt="furiniture 1" width={200} height={200} className="mb-4" />
              <p className="text-[#252B42] text-[24px] font-bold mb-2">$1,139.33</p>
              <p className=" text-[#737373] text-[14px] font-bold mb-[7rem]"> <span className="mr-2">Availability</span>  :<span className="text-[#23A6F0] ml-1">In Stock</span> </p>
            </div>
            <Image src={product_colors} alt="furiniture 1" width={150} height={150} className="mb-16" />
            <div className="flex">
              <button className="cursor-pointer py-3 text-[14px] px-5 border font-bold bg-[#23A6F0] rounded-md text-[#fff] hover:bg-[#23A6F0] hover:text-[#fff] duration-300">
                Select Options
              </button>
              <div>
                <Image src={likee} alt="furiniture 1" width={40} height={40} className="ml-2" />
              </div>
              <div>
                <Image src={basket} alt="furiniture 1" width={40} height={40} className="ml-2" />
              </div>
              <div>
                <Image src={more} alt="furiniture 1" width={40} height={40} className="ml-2" />
              </div>
            </div>
          </div>
        </div>

        <div>
          <Image src={child_images} alt="furiniture 1" width={180} height={180} className="mt-5" />
        </div>
      </div>

      <div className="flex text-[#737373] text-[14px] py-7 font-[600] justify-center border-b mb-9">
        <p>Description</p>
        <p className="mx-12">Additional Information</p>
        <p>Reviews (0)</p>
      </div>

      <div className="flex px-[11.5rem] justify-between pb-9">
        <div className="pt-2 w-[45%]">
          <p className="text-[#252B42] text-[20px] font-bold mb-6">the quick fox jumps over </p>
          <p className="text-[#737373] text-[14px] mb-6">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
          <p className="text-[#737373] text-[14px] mb-6 border-l-[3px] pl-5 border-l-[#23856D]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
          <p className="text-[#737373] text-[14px]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
          </p>
        </div>
        <div className="w-[41%]">
          <Image src={purplechair} alt="furiniture 1" width={450} height={450} />
        </div>
      </div>

      <div className="bg-[#FAFAFA] px-[11.5rem]">
        <p className="text-[#252B42] text-[24px] font-bold mb-5 pt-10 pb-6 border-b-2 border-[#ECECEC]">BESTSELLER PRODUCTS</p>
        
        <ProductList showStyles={true} />

        <div className="flex justify-between items-center">
          <div>
            <Image src={hooli} alt="" width={80} height={80} className="mb-16" />
          </div>
          <div>
            <Image src={lyft} alt="furiniture 1" width={80} height={80} className="mb-16" />
          </div>
          <div>
            <Image src={leaf} alt="furiniture 1" width={80} height={80} className="mb-16" />
          </div>
          <div>
            <Image src={stripe} alt="furiniture 1" width={80} height={80} className="mb-16" />
          </div>
          <div>
            <Image src={aws} alt="furiniture 1" width={80} height={80} className="mb-16" />
          </div>
          <div>
            <Image src={robot} alt="furiniture 1" width={80} height={80} className="mb-16" />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
