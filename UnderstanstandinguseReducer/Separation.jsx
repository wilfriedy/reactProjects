import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// State and functions
const initialState = [
  { id: 1, name: "Apple", quantity: 2 },
  { id: 2, name: "Banana", quantity: 1 },
];
const initialProduct = {
  name: "",
  quantity: "",
};

// Shopping list item component
function ShoppingItem({ item, handleRemove, handleEdit }) {
  return (
    <li key={item.id}>
      {item.name} <i>{item.quantity}</i>{" "}
      <b onClick={() => handleRemove(item.id)} style={{ cursor: "pointer" }}>
        Remove
      </b>
      {"  "}
      <b onClick={() => handleEdit(item.id)} style={{ cursor: "pointer" }}>
        Edit
      </b>
    </li>
  );
}

// Shopping list component
function ShoppingList({ items, handleRemove, handleEdit }) {
  return (
    <ul>
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          item={item}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
}

// Form component
function ShoppingForm({ submitHandler, inputHandler, product, isEditing }) {
  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        name="name"
        onChange={inputHandler}
        value={product.name}
      />
      <br />
      <br />
      <input
        type="number"
        name="quantity"
        onChange={inputHandler}
        value={product.quantity}
      />
      <br />
      <br />
      <button>{isEditing ? "Edit" : "Add"}</button>
    </form>
  );
}

// Main shopping cart component
function ShoppingCart() {
  const [state, setState] = useState(initialState);
  const [product, setProduct] = useState(initialProduct);
  const [isEditing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const inputHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (isEditing) {
      setEditing(false);
      setState((prevState) =>
        prevState.map((item) =>
          item.id === editId ? { ...product, id: editId } : item
        )
      );
    } else {
      setState((prevState) => [...prevState, { ...product, id: uuidv4() }]);
    }
    setProduct({ name: "", quantity: "" });
  };

  const handleRemove = (id) => {
    setState((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    const itemToEdit = state.find((item) => item.id === id);
    setEditing(true);
    setEditId(id);
    setProduct({ name: itemToEdit.name, quantity: itemToEdit.quantity });
  };

  return (
    <div>
      <div className="cart-container">
        <ShoppingList
          items={state}
          handleRemove={handleRemove}
          handleEdit={handleEdit}
        />
      </div>
      <ShoppingForm
        submitHandler={submitHandler}
        inputHandler={inputHandler}
        product={product}
        isEditing={isEditing}
      />
    </div>
  );
}

export default ShoppingCart;
