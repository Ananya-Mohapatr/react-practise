import { useDispatch, useSelector } from "react-redux"
import { ItemList } from "../Modal/ItemList"
import { clearCart } from "../utils/CardSlice"
let s1 = {
    "background-position": "0 -1794px"
}

const Cart = () => {
    const items = useSelector((store) => store.cart.items)
    const dispatch = useDispatch()
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div className="text-center m-4 p-4 font-bold">
            Cart
            <div className="w-6/12 m-auto">
                    <button className="p-4 m-4 bg-black rounded-md text-white" onClick={handleClearCart}>Clear Cart</button>
                    {items.length == 0 && <h1>Cart is empty,Add items to cart</h1>}
                    <ItemList items={items} />
                </div>
        </div>
    )
}
export default Cart