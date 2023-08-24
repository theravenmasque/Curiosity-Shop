import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShopingCartContext";
import { CartItem } from "./CartItem";
import { FormatCurrency } from "../utilities/FormatCurrency";
import storeItem from '../data/items.json'
type ShoppingCartPops = {
    isOpen : boolean
}

export function ShopingCart({isOpen}:ShoppingCartPops){
    const {closeCart, cartItems} = useShoppingCart()
    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <OffcanvasHeader closeButton>
            <OffcanvasTitle>
                Cart
            </OffcanvasTitle>          
        </OffcanvasHeader>
        <OffcanvasBody>
            <Stack gap={3}>
                {cartItems.map(item =>( <CartItem key={item.id} {...item}/>))}
                <div className="ms-auto fw-bold fs-5">
                    Total: {FormatCurrency(cartItems.reduce((total, CartItem)=>{
                        const item = storeItem.find(i => i.id === CartItem.id)
                        return total + (item?.price || 0) * CartItem.quantity
                    },0)
                    )}
                </div>
            </Stack>
        </OffcanvasBody>
    </Offcanvas>
}