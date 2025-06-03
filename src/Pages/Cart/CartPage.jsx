import { CartEmpty } from "./components/Cartempty";
import { CartList } from "./components/CartList";
import { useTitle } from "../../Hooks/useTitle";
import { useCart } from "../../context"

export const CartPage = () => {

const { cartList } = useCart();
  useTitle(`cart(${cartList.length})`)

  return (
    <main>       
      { cartList.length ? <CartList /> : <CartEmpty /> }   
    </main>
  )
}
