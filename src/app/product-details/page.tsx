"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StarRating from "@/components/StarRating";
import { getProductsDetailsById } from "@/store/Products";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { GoChevronRight } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import aws from "../../../public/aws.png";
import basket from "../../../public/basket.png";
import hooli from "../../../public/hooli.png";
import leaf from "../../../public/leaf.png";
import likee from "../../../public/likee.png";
import lyft from "../../../public/lyft.png";
import more from "../../../public/more.png";
import product_colors from "../../../public/product_colors.png";
import purplechair from "../../../public/purplechair.png";
import robot from "../../../public/robot.png";
import stripe from "../../../public/stripe.png";
import ProductList from "../home/ProductList";
import ProductModal from "./ProductModal";
import { axiosInstance } from "@/services/config";
import { BiSolidErrorCircle } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";
import NotificationBar from "../../components/NotificationBar"
import { cartActions } from "@/store/CartSlice";

interface ProductDetailState {
  errorMessage: string,
  successMessage: string,
  notificationStatus: boolean,
  isLoading: boolean,
  productId: string | null,
}
export default function ProductDetails() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const [state, setState] = useState<ProductDetailState>({
    errorMessage: "",
    successMessage: "",
    notificationStatus: false,
    isLoading: false,
    productId: null,
  })

  const product = useSelector((state: any) => state.cartList);

  console.log("sdfd", product)

  const { notificationStatus, successMessage, errorMessage, isLoading, productId } = state

  const productDetails: any = useSelector((state: any) => state?.product?.productDetails);
  const params = useSearchParams();
  const dispatch = useDispatch();

  const userId = 5;
  const products = [
    { id: productId, quantity: 1 },
  ];

  const openProductModal = (component: any) => {
    setIsOpen(true);
    setModalContent(component);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };

  const addProductToCart = async (userId: any, products: any) => {
    try {
      setState({ ...state, isLoading: true });
      const response = await axiosInstance.post(`carts/add`, {
        userId: userId,
        products: products,
      });

      console.log("items", response.data.products)
      dispatch(cartActions.addToCart({
        id: response.data.products[0].id,
        price: response?.data?.products[0]?.price,
        quantity: response?.data?.products[0]?.quantity,
        totalPrice: response?.data?.products[0]?.totalPrice,
        title: response?.data?.products[0]?.title,
        thumbnail: response?.data?.products[0]?.thumbnail, 
      }));

      setState({ ...state, isLoading: false, successMessage: "Product added successfully", notificationStatus: true });
      setIsOpen(false);
    } catch (error) {
      setState({ ...state, isLoading: false, errorMessage: "failed to add product", notificationStatus: true });
    }
  };


  useEffect(() => {
    const productId = params.get('id');
    setState({ ...state, productId })

    if (productId) {
      dispatch(getProductsDetailsById(productId) as any);
      console.log(productDetails)
    }

  }, [params, dispatch]);

  return (
    <main>
      <Header isCompact={true} openProductModal={openProductModal} />
      <ProductModal isOpen={isOpen} closeModal={closeModal} modalContent={modalContent} />
      {notificationStatus && errorMessage && (
        <NotificationBar
          message={errorMessage}
          color="#D84646"
          icon={<BiSolidErrorCircle className='mr-4 text-[#fff] text-[20px]' />}
        />
      )}
      {notificationStatus && successMessage && (
        <NotificationBar
          message={successMessage}
          color="#008000"
          icon={<FaCheckCircle className='mr-4 text-[#fff] text-[20px]' />}
        />
      )}
      <div className="bg-[#FAFAFA] px-[11.5rem] pb-7">
        <div className="flex text-[#737373]  text-[14px] items-center  pt-8 pb-7 font-[600]">
          <Link href="/"> <p className="mr-3 text-[#252B42] font-bold">Home</p></Link>
          <GoChevronRight className="mr-3 text-[#BDBDBD] text-[23px] font-normal" />
          <p className="text-[#BDBDBD]">Shop</p>
        </div>

        <div className="flex">
          <div className="w-[51%]">
            <Image src={productDetails?.thumbnail} alt="furiniture 1" width={500} height={500} />

            <div className="flex mt-5">
              {productDetails?.images?.map((data: any) => (
                <div className="w-[18%] mr-3 h-[75px]">
                  <Image src={data} alt="furiniture 1" width={150} height={150} className="w-full h-full" />
                </div>
              ))}
            </div>
          </div>

          <div className="pl-12 pt-2 w-[45%]">
            <div className=" border-b mb-7">
              <p className="mr-3 text-[#252B42] text-[20px] font-normal mb-3">{productDetails?.title}</p>
              {/* <Image src={reviews} alt="furiniture 1" width={200} height={200} className="mb-4" /> */}
              <div className="flex">
                <StarRating ratings={productDetails?.rating} />
                <p className="text-[#737373] text-[14px] font-bold pt-[1px] ml-2">10 reviews</p>
              </div>
              <p className="text-[#252B42] text-[24px] font-bold mb-2 mt-4">${productDetails?.price}</p>
              <p className=" text-[#737373] text-[14px] font-bold mb-[7rem]"> <span className="mr-2">Availability</span>  :<span className="text-[#23A6F0] ml-1">In Stock</span> </p>
            </div>
            <Image src={product_colors} alt="furiniture 1" width={150} height={150} className="mb-16" />
            <div className="flex">
              <button className="cursor-pointer py-3 text-[14px] px-5 border font-bold bg-[#23A6F0] rounded-md text-[#fff] hover:bg-[#23A6F0] hover:text-[#fff] duration-300">
                Select Options
              </button>
              <div>
                <Image src={likee} alt="furiniture 1" width={40} height={40} className="ml-2 cursor-pointer" />
              </div>
              <div>
                <Image src={basket} onClick={() => addProductToCart(userId, products)} alt="furiniture 1" width={40} height={40} className="ml-2 cursor-pointer" />
              </div>
              <div>
                <Image src={more} alt="furiniture 1" width={40} height={40} className="ml-2 cursor-pointer" />
              </div>
            </div>
          </div>
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

      <Footer changeBackground={true} />
    </main>
  );
}
