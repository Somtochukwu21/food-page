import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { price, name, amount, onRemove, onAdd } = props;
  const propsPrice = price.toFixed(2);

  return (
    <li className=" flex justify-between items-center border-b-2 border-b-[#8a2b06] py-4 px-0 my-4 mx-0;">
      <div>
        <h2 className="pb-2 text-[#363636]">{name}</h2>
        <div className="w-[10rem] flex justify-between items-center">
          <span className="font-bold text-[#8a2b06]">{`$${propsPrice}`}</span>
          <span className="font-bold  border border-[#ccc] py-1  px-[0.75rem] rounded-[6px] text-[#363636]">
            x {amount}
          </span>
        </div>
      </div>
      <div className="flex flex-column gap-1 md:flex-row">
        <button
          className="font-bold  text-[1.25rem]  text-[#8a2b06]  border border-[#8a2b06]  w-12   text-center  rounded-[6px]  bg-transparent  cursor-pointer  ml-4  m-1 hover:bg-[#8a2b06] active:bg-[#8a2b06] hover:text-white active:text-white"
          onClick={onRemove}
        >
          −
        </button>
        <button
          className="font-bold  text-[1.25rem]  text-[#8a2b06]  border border-[#8a2b06]  w-12   text-center  rounded-[6px]  bg-transparent  cursor-pointer  ml-4  m-1 hover:bg-[#8a2b06] active:bg-[#8a2b06] hover:text-white active:text-white"
          onClick={onAdd}
        >
          +
        </button>
      </div>
    </li>
  );
};
export default CartItem;
