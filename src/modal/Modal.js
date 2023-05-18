import ReactDOM from "react-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";

const BackDrop = () => {
  const dispatch = useDispatch();

  const closeButtonHandler = () => {
    dispatch(uiActions.close());
  };
  return (
    <div
      className=" fixed top-0 left-0 w-[100%] z-50 h-[100vh] bg-[#000000a8]"
      onClick={closeButtonHandler}
    />
  );
};

const ModalOverlay = (props) => {
  return (
    <div className=" fixed top-[30vh] left-1/2 -translate-x-1/2 -translate-y-1/2  w-[40rem] bg-white p-4 rounded-[14px] drop-shadow-[0 2px 8px rgba(0, 0, 0, 0.25) z-50 animation-[slide-down 300ms ease-out forwards]]">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
