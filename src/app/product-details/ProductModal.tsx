import React, { Fragment, ReactNode } from "react";
import { Dialog, Transition } from '@headlessui/react'

interface ProductModalProps {
    isOpen: boolean;
    closeModal: () => void;
    modalContent: ReactNode;
}

const ProductModal: React.FC<ProductModalProps> = ({ isOpen, closeModal, modalContent }) => {
    if (!isOpen) {
        return null; // Do not render anything if modal is not open
    }

    return (
        <div className="">
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="fixed inset-0 overflow-y-auto">
                                    <div className="flex min-h-full items-center justify-center p-4">
                                        <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-md bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-lg font-medium leading-6 text-gray-900"
                                            >
                                                {/* Add your dialog title here if needed */}
                                            </Dialog.Title>
                                            <div className="p-2 h-[80vh] overflow-y-auto">
                                                {modalContent}
                                            </div>
                                        </Dialog.Panel>
                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default ProductModal;