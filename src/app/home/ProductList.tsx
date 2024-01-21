import Image from "next/image"
import lamp from "../../../public/lamp.png"


interface ProductProps {
    showStyles: boolean;
}

const ProductList: React.FC<ProductProps> = ({ showStyles }) => {

    const hideFeature = showStyles ? "hidden" : "block";
    const changeWrapperWidth = showStyles ? "w-[100%]" : "w-[81%]";
    const changePadding = showStyles ? "px-0 pb-7" : "pb-[8rem] px-10";
    const changeCardWidth = showStyles ? "w-[22%]" : "w-[17%]";


    return (
        <div className={`${changePadding} pt-3 `}>
            <div className={`${hideFeature} text-center mb-9`}>
                <p className="text-[#737373] text-[20px] mb-1 font-semibold">Featured Products</p>
                <h3 className="text-[#252B42] font-bold text-[24px] mb-1">BESTSELLER PRODUCTS</h3>
                <p className="text-[#737373] text-[14px] font-semibold">Problems trying to resolve the conflict between </p>
            </div>
            <div className="flex justify-center">
                <div className={`flex flex-wrap justify-center pb-4 ${changeWrapperWidth}`}>
                    <div className={`${changeCardWidth} mr-7 mb-8`}>
                        <Image src={lamp} alt="product image" className="w-full" width={178} height={178} />
                        <div className=" text-center mb-3 py-8 bg-[#fff]">
                            <h3 className="text-[#252B42] font-bold text-[16px] mb-3">Graphic Design</h3>
                            <p className="text-[#737373] text-[14px] font-semibold mb-3">English Department</p>
                            <p className="text-[#737373] text-[16px] font-semibold">$16.48 <span className="text-[#23856D] ml-2">$6.48</span> </p>
                        </div>
                    </div>
                    <div className={`${changeCardWidth} mr-7 mb-8`}>
                        <Image src={lamp} alt="product image" className="w-full" width={178} height={178} />
                        <div className=" text-center mb-3 py-8 bg-[#fff]">
                            <h3 className="text-[#252B42] font-bold text-[16px] mb-3">Graphic Design</h3>
                            <p className="text-[#737373] text-[14px] font-semibold mb-3">English Department</p>
                            <p className="text-[#737373] text-[16px] font-semibold">$16.48 <span className="text-[#23856D] ml-2">$6.48</span> </p>
                        </div>
                    </div>
                    <div className={`${changeCardWidth} mr-7 mb-8`}>
                        <Image src={lamp} alt="product image" className="w-full" width={178} height={178} />
                        <div className=" text-center mb-3 py-8 bg-[#fff]">
                            <h3 className="text-[#252B42] font-bold text-[16px] mb-3">Graphic Design</h3>
                            <p className="text-[#737373] text-[14px] font-semibold mb-3">English Department</p>
                            <p className="text-[#737373] text-[16px] font-semibold">$16.48 <span className="text-[#23856D] ml-2">$6.48</span> </p>
                        </div>
                    </div>
                    <div className={`${changeCardWidth} mr-7 mb-8`}>
                        <Image src={lamp} alt="product image" className="w-full" width={178} height={178} />
                        <div className=" text-center mb-3 py-8 bg-[#fff]">
                            <h3 className="text-[#252B42] font-bold text-[16px] mb-3">Graphic Design</h3>
                            <p className="text-[#737373] text-[14px] font-semibold mb-3">English Department</p>
                            <p className="text-[#737373] text-[16px] font-semibold">$16.48 <span className="text-[#23856D] ml-2">$6.48</span> </p>
                        </div>
                    </div>
                    <div className={`${changeCardWidth} mr-7 mb-8`}>
                        <Image src={lamp} alt="product image" className="w-full" width={178} height={178} />
                        <div className=" text-center mb-3 py-8 bg-[#fff]">
                            <h3 className="text-[#252B42] font-bold text-[16px] mb-3">Graphic Design</h3>
                            <p className="text-[#737373] text-[14px] font-semibold mb-3">English Department</p>
                            <p className="text-[#737373] text-[16px] font-semibold">$16.48 <span className="text-[#23856D] ml-2">$6.48</span> </p>
                        </div>
                    </div>
                    <div className={`${changeCardWidth} mr-7 mb-8`}>
                        <Image src={lamp} alt="product image" className="w-full" width={178} height={178} />
                        <div className=" text-center mb-3 py-8 bg-[#fff]">
                            <h3 className="text-[#252B42] font-bold text-[16px] mb-3">Graphic Design</h3>
                            <p className="text-[#737373] text-[14px] font-semibold mb-3">English Department</p>
                            <p className="text-[#737373] text-[16px] font-semibold">$16.48 <span className="text-[#23856D] ml-2">$6.48</span> </p>
                        </div>
                    </div>
                    <div className={`${changeCardWidth} mr-7 mb-8`}>
                        <Image src={lamp} alt="product image" className="w-full" width={178} height={178} />
                        <div className=" text-center mb-3 py-8 bg-[#fff]">
                            <h3 className="text-[#252B42] font-bold text-[16px] mb-3">Graphic Design</h3>
                            <p className="text-[#737373] text-[14px] font-semibold mb-3">English Department</p>
                            <p className="text-[#737373] text-[16px] font-semibold">$16.48 <span className="text-[#23856D] ml-2">$6.48</span> </p>
                        </div>
                    </div>
                    <div className={`${changeCardWidth} mr-7 mb-8`}>
                        <Image src={lamp} alt="product image" className="w-full" width={178} height={178} />
                        <div className=" text-center mb-3 py-8 bg-[#fff]">
                            <h3 className="text-[#252B42] font-bold text-[16px] mb-3">Graphic Design</h3>
                            <p className="text-[#737373] text-[14px] font-semibold mb-3">English Department</p>
                            <p className="text-[#737373] text-[16px] font-semibold">$16.48 <span className="text-[#23856D] ml-2">$6.48</span> </p>
                        </div>
                    </div>
                    <div className={`${changeCardWidth} mr-7 mb-8`}>
                        <Image src={lamp} alt="product image" className="w-full" width={178} height={178} />
                        <div className=" text-center mb-3 py-8 bg-[#fff]">
                            <h3 className="text-[#252B42] font-bold text-[16px] mb-3">Graphic Design</h3>
                            <p className="text-[#737373] text-[14px] font-semibold mb-3">English Department</p>
                            <p className="text-[#737373] text-[16px] font-semibold">$16.48 <span className="text-[#23856D] ml-2">$6.48</span> </p>
                        </div>
                    </div>
                    <div className={`${changeCardWidth} mr-7 mb-8`}>
                        <Image src={lamp} alt="product image" className="w-full" width={178} height={178} />
                        <div className=" text-center mb-3 py-8 bg-[#fff]">
                            <h3 className="text-[#252B42] font-bold text-[16px] mb-3">Graphic Design</h3>
                            <p className="text-[#737373] text-[14px] font-semibold mb-3">English Department</p>
                            <p className="text-[#737373] text-[16px] font-semibold">$16.48 <span className="text-[#23856D] ml-2">$6.48</span> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`text-center ${hideFeature}`}>
                <button className={`cursor-pointer  mt-9 py-3 text-[14px] px-[2.4rem] border font-bold border-[#23A6F0] rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-[#fff] duration-300`}>
                    LOAD MORE PRODUCTS
                </button>
            </div>
        </div>
    )
}

export default ProductList;