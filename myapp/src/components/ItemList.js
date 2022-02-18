import React, { useState } from "react";
import Item from "./Item";

const ItemList = (props) => {
  const [items, setItems] = useState(props.items);

  return items.map((item) => (
    <div key={item.id}>
      <Item
        {...item}
      />
    </div>
  ));
};

export default ItemList;
