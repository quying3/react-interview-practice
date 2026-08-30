import "./App.css";
import { useState } from "react";
// import Counter from "./components/Counter";
// import TodoList from "./components/TodoList";
// import UserSearch from "./components/UserSearch";
// import UserList from "./components/UserList";
// import SignUpForm from "./components/SignUpForm";
// import ProductSelector from "./components/ProductSelector";
// import UserSearchList from "./components/UserSearchList";
import Modal, { Child } from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <>
      {/* <Counter initialValue={5} /> */}
      {/* <TodoList /> */}
      {/* <UserSearch /> */}
      {/* <UserList /> */}
      {/* <SignUpForm /> */}
      {/* <ProductSelector /> */}
      {/* <UserSearchList /> */}
      <button
        style={{
          width: "100px",
          margin: "0 auto",
          textAlign: "center",
        }}
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Child />
      </Modal>
    </>
  );
}

export default App;
