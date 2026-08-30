import React from "react";
export type ModalProp = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};
const Modal = ({ isOpen, onClose, children }: ModalProp) => {
  if (!isOpen) return null;
  return (
    <>
      {children}
      <button
        style={{
          width: "100px",
          margin: "0 auto",
          textAlign: "center",
        }}
        onClick={onClose}
      >
        Close
      </button>
    </>
  );
};

export default Modal;

export const Child = () => {
  return <p>Hi! Children</p>;
};

// Exercise 8 — Reusable Modal

// Create a React + TypeScript component called `Modal`.

// Requirements:

// 1. The `Modal` component should accept these props:
//    - `isOpen: boolean`
//    - `onClose: () => void`
//    - `children: React.ReactNode`

// 2. If `isOpen` is false, the Modal should not render anything.

// 3. If `isOpen` is true:
//    - Display the modal content.
//    - Render whatever is passed through `children`.
//    - Include a Close button.

// 4. Clicking the Close button should call the `onClose` callback prop.

// 5. In the parent `App` component:
//    - Create state to track whether the modal is open.
//    - Add an "Open Modal" button.
//    - Clicking it should open the modal.
//    - Pass the state and close handler to the Modal component.

// 6. Put some sample content inside the Modal using `children`.

// Do not add advanced features such as portals, animations, or clicking the backdrop to close yet.

// Goal:
// Practice TypeScript props, callback props, children, conditional rendering, and parent-controlled state.
