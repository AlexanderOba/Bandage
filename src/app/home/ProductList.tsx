"use client"
import { getProducts } from "@/store/Products";
import { RootState } from "@/types/Product";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


interface ProductProps {
    showStyles: boolean;
}

const ProductList: React.FC<ProductProps> = ({ showStyles }) => {
    const [visibleProducts, setVisibleProducts] = useState(10); // Initial number of products to display
    const itemsPerPage = 10;
    
    const product = useSelector((state: RootState) => state.product.product);

    const dispatch = useDispatch();

    const loadMoreProducts = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + itemsPerPage);
    };

    const displayedProducts = Array.isArray(product) ? product?.slice(0, visibleProducts) : [];
    const shouldShowMoreButton = visibleProducts < product?.length;

    useEffect(() => {
        dispatch(getProducts() as any);
        console.log("bandage", product)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);


    const hideFeature = showStyles ? "hidden" : "block";
    const changeWrapperWidth = showStyles ? "w-[100%]" : "md:w-[81%] w-full";
    const changePadding = showStyles ? "px-0 pb-7" : "pb-[8rem] px-10";
    const changeCardWidth = showStyles ? "md:w-[22%] w-full" : "md:w-[17%] w-[100%]";

    return (
        <div className={`${changePadding} pt-3 `}>
            <div className={`${hideFeature} text-center mb-9`}>
                <p className="text-[#737373] text-[20px] mb-1 font-semibold">Featured Products</p>
                <h3 className="text-[#252B42] font-bold text-[24px] mb-1">BESTSELLER PRODUCTS</h3>
                <p className="text-[#737373] text-[14px] font-semibold">Problems trying to resolve the conflict between </p>
            </div>

            <div className="flex justify-center">
                <div className={`flex flex-wrap justify-center pb-4 ${changeWrapperWidth}`}>
                    {displayedProducts?.map((data: any, i) => (
                        <Link href={`/product-details/?id=${data?.id}`} className={`${changeCardWidth} md:mr-7 mr-0 mb-8`} key={data?.id}>
                            <div className="h-[200px] w-full">
                                <Image src={data?.thumbnail} alt="product image" className="w-full h-full" width={178} height={178} />
                            </div>
                            <div className=" text-center mb-3 py-8 bg-[#fff]">
                                <h3 className="text-[#252B42] font-bold text-[16px] mb-3">{data?.title}</h3>
                                <p className="text-[#737373] text-[14px] font-semibold mb-3">{data?.category}</p>
                                <p className="text-[#737373] text-[16px] font-semibold">${data?.price} <span className="text-[#23856D] ml-2">${data?.discountPercentage}</span> </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className={`${hideFeature}`}>
                {shouldShowMoreButton && (
                    <div className="text-center ">
                        <button
                            onClick={loadMoreProducts}
                            className="cursor-pointer mt-9 py-3 text-[14px] px-[2.4rem] border font-bold border-[#23A6F0] rounded-md text-[#23A6F0] hover:bg-[#23A6F0] hover:text-[#fff] duration-300"
                        >
                            LOAD MORE PRODUCTS
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductList;