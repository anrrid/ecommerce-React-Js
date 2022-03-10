import Item from "./Item";

const ItemList = (props) => {
  const items = (props.items);

  return items.map((item) => (
    <div key={item.id}>
      <Item
        {...item}
      />
    </div>
  ));
};

export default ItemList;
