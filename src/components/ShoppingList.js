import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuidv4 } from "uuid";

function ShoppingList({ items }) {
  const [nameOfNewItem, setNameOfNewItem] = useState("");
  const [categorySelection, setCategorySelection] = useState("Produce");
  const [newItemsArray, setNewItemsArray] = useState([...items]);

  function nameOfItem(e) {
    setNameOfNewItem(e.target.value);
    
  }
  function newItemCategory(e) {
    setCategorySelection(e.target.value);
  }
  function onItemFormSubmit(e) {
    e.preventDefault();
    setNewItemsArray((prev) => [...prev, {
      id: uuidv4,
      name: nameOfNewItem,
      category: categorySelection,
    }])
  }

  const [filter, setFilter] = useState("");
  function onSearchChange(e) {
    setFilter(e.target.value);
  }

  const filterItem = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  const filterDisplay = filterItem.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ));

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory([event.target.value]);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm
        nameOfItem={nameOfItem}
        newItemCategory={newItemCategory}
        onItemFormSubmit={onItemFormSubmit}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {filter
          ? filterDisplay
          : newItemsArray.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
