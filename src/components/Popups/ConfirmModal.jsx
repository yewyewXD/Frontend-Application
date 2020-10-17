import React from "react";
import ReactDom from "react-dom";
import styled from "styled-components";

const ScreenOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 50px;
  z-index: 1000;
`;

export default function ConfirmModal({ open, closeModal }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <ScreenOverlay className="screen-overlay"></ScreenOverlay>
      <Modal className="modal">
        <h1>hi from confirm modal</h1>
        <button onClick={closeModal} className="btn btn-primary btn-md">
          Close Modal
        </button>
      </Modal>
    </>,
    document.getElementById("portal")
  );
}
