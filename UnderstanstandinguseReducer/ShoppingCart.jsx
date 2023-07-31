import React, { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const initialState = [
  { id: 1, name: "Apple", quantity: 2 },
  { id: 2, name: "Banana", quantity: 1 },
];
const products = {
  name: "",
  quantity: "",
};
const types = {
  add_item: "ADD_ITEM",
  remove_item: "REMOVE_ITEM",
  edit: "EDIT",
};
function ShoppingCart() {
  const reducer = (state, action) => {
    switch (action.type) {
      case types.add_item:
        return [...state, action.payload];
      case types.remove_item:
        return state.filter((state) => state.id != action.id);
      case types.edit:
        return state.map((item) =>
          item.id === action.id ? action.payload : item
        );
      default:
        throw new Error();
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const [product, setProduct] = useState(products);
  const [isEditing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const inputHandler = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (isEditing) {
      setEditing(false);
      dispatch({
        type: types.edit,
        payload: { ...product, id: editId },
        id: editId,
      });
    } else {
      dispatch({ type: types.add_item, payload: { ...product, id: uuidv4() } });
    }
    setProduct({ name: "", quantity: "" });
  }
  function handleRemove(id) {
    dispatch({ type: types.remove_item, id });
  }
  function handleEdit(id) {
    const itemToEdit = state.find((item) => item.id === id);
    setEditing(true);
    setEditId(id);
    setProduct({ name: itemToEdit.name, quantity: itemToEdit.quantity });
  }

  return (
    <div>
      <div className="cart-container">
        <ul>
          {state.map((item) => (
            <li key={item.id}>
              {item.name} <i>{item.quantity}</i>{" "}
              <b
                onClick={() => handleRemove(item.id)}
                style={{ cursor: "pointer" }}
              >
                Remove
              </b>
              {"  "}
              <b
                onClick={() => handleEdit(item.id)}
                style={{ cursor: "pointer" }}
              >
                Edit
              </b>
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
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
        <button> {isEditing ? "Edit" : "Add"} </button>
      </form>
    </div>
  );
}

export default ShoppingCart;
