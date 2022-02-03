import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit, nameOfItem, newItemCategory}) {
  return (
    <form className="NewItem">
      <label>
        Name:
        <input type="text" name="name" onChange={nameOfItem}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={newItemCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" onClick={onItemFormSubmit}>Add to List</button>
    </form>
  );
}

export default ItemForm;
