import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { handelAdd } from "../redux/action";

const Add = () => {
  const dispatch = useDispatch();
  const [addInput, setAddInput] = useState("");
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(handelAdd(addInput));
          setAddInput("");
        }}
      >
        <input
          type="text"
          placeholder="ajouter une tache"
          value={addInput}
          onChange={(e) => setAddInput(e.target.value)}
        />
        <button>Ajouter</button>
      </form>
    </div>
  );
};

export default Add;