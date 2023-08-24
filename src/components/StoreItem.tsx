import {Card,Button} from "react-bootstrap"
import { FormatCurrency } from "../utilities/FormatCurrency"
import { useShoppingCart } from "../context/ShopingCartContext"

type StoreItemProps = {
    id:number
    name: string
    price: number
    image: string
}

export function StoreItem({id, name, price, image}: StoreItemProps) {
    const {getItemQuantity, increaseQuantity, decreaseQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(id);

    return (
        <Card className="border-0 h-100 bg-transparent">
            <Card.Body className=" d-flex justify-content-center bg-dark text-white rounded mb-1">
            <Card.Title >{name}</Card.Title>
            </Card.Body>
            <Card.Img variant="top" src={image} style={{objectFit:"cover"}} ></Card.Img>
            <Card.Body className="d-flex justify-content-center bg-dark text-white rounded-bottom mb-1 flex-column">
            <Card.Title className="align-self-center" >{FormatCurrency(price)}</Card.Title>
            <div className="mt-auto">
                {quantity === 0 ? (<Button className="w-100" onClick={() => increaseQuantity(id)}>Add to Cart</Button>
                 ) : <div className="d-flex justify-content-center align-items-center flex-column" style={{gap: ".5rem"}}>
                    <div className="d-flex flex-row">
                    <Button onClick={()=>decreaseQuantity(id)}>-</Button>
                    <div>
                        <span className="fs-3 p-4">{quantity}</span>
                    </div>
                    <Button onClick={()=>increaseQuantity(id)}>+</Button>
                    </div>
                    <div className="d-flex justify-content-center align-items-center mt-3"style={{gap: ".5rem"}}>
                    <Button variant="danger" size="sm" onClick={()=>removeFromCart(id)}>Remove from Cart</Button>
                    </div>
                    
                 </div> }
                 
                   
            </div>
            </Card.Body>
        </Card>
    )
}