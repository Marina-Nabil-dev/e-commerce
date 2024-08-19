import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import RegisterModal from "./ModalTypes/RegisterModal";

const MODAL_COMPONENTS = {
//   login: LoginModal,
  register: RegisterModal,
  // Add more modal components here as needed
};

const ModalComponent = ({ isOpen, closeModal, modalType, modalProps }) => {
  const SpecificModal = MODAL_COMPONENTS[modalType];

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      className="fixed z-50 inset-0 overflow-y-auto"
    >
      <DialogBackdrop className="fixed inset-0 bg-black opacity-30" />
      <DialogPanel className="relative w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        {SpecificModal ? (
          <SpecificModal {...modalProps} closeModal={closeModal} />
        ) : null}
      </DialogPanel>
    </Dialog>
  );
};

export default ModalComponent;
