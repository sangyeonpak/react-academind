import { useState } from "react";
import Modal from "./Modal.js";
import Backdrop from "./Backdrop.js";

function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const deleteHandler = () => {
    setModalIsOpen(true);
  };
  const closeModalHandler = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
        { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
        { modalIsOpen && <Backdrop onClick={closeModalHandler}/>}
      </div>
    </div>
  );
}

export default Todo;
