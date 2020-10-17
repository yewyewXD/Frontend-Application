import React from "react";
import ReactDom from "react-dom";

export default function ConfirmModal({ open, closeModal }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <div>
      <h1>hi from confirm modal</h1>
      <button onClick={closeModal} className="btn btn-primary btn-md">
        Close Modal
      </button>
    </div>,
    document.getElementById("portal")
  );
}
