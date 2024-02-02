import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle, useRef } from "react";
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      //showModal is a method that is used to show the modal
      //open function here is used to open the modal in other components
      open() {
        dialog.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
