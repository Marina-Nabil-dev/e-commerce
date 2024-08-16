import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { XIcon } from '@heroicons/react/outline';

const ModalManager = ({ modalType, closeModal }) => {
  return (
    <Dialog
      open={!!modalType}
      onClose={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <div className="relative bg-white p-6 rounded-lg shadow-lg">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900"
        >
          <XIcon className="h-6 w-6" aria-hidden="true" />
        </button>
        {modalType === "register" && (
          <>
            <DialogTitle className="text-lg font-semibold">
              Register
            </DialogTitle>
            <DialogPanel className="mt-2">
              {/* Register form or content here */}
            </DialogPanel>
          </>
        )}
        {modalType === "login" && (
          <>
            <DialogTitle className="text-lg font-semibold">Login</DialogTitle>
            <DialogPanel className="mt-2">
              {/* Login form or content here */}
            </DialogPanel>
          </>
        )}
      </div>
    </Dialog>
  );
};

export default ModalManager;

// const App = () => {
//   const [modalType, setModalType] = useState(null);

//   const openModal = (type) => setModalType(type);
//   const closeModal = () => setModalType(null);

//   return (
//     <div>
//       {/* Trigger buttons */}
//       <button onClick={() => openModal("register")}>Open Register Modal</button>
//       <button onClick={() => openModal("login")}>Open Login Modal</button>

//       {/* Modal Manager */}
//       <ModalManager modalType={modalType} closeModal={closeModal} />
//     </div>
//   );
// };

// export default App;
