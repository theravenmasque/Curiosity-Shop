import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShopingCartContext"
import storeItem from '../data/items.json'
import { FormatCurrency } from "../utilities/FormatCurrency"

type CartItemProps = {
id:number 
quantity : number
}

export function CartItem({id, quantity}: CartItemProps){
    const {removeFromCart} = useShoppingCart()
    const item = storeItem.find(i => i.id === id)
    if (item == null) return null

    return(
        <Stack direction="horizontal" gap={2}>
            <img src={item.image} alt={item.name} style={{height:"125px"}}/>
            <div className="ma-auto">
                <div>
                    {item.name}{""} {quantity > 1 && <span className="text-muted">x{quantity}</span>}
                </div>
                <div>
                {  FormatCurrency(item.price)}
                </div>
            </div>
            <div>
                {  FormatCurrency(item.price * quantity)}
            </div>
            <Button size="sm" onClick={()=>removeFromCart(item.id)} >&times;</Button>
        </Stack>
    )

    }