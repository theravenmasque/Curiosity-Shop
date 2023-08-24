import storeItems from "../data/items.json"
import {Row, Col} from "react-bootstrap"
import { StoreItem } from "../components/StoreItem"
import { useState } from "react"
import './Store.css'



export function Store() {
    const [searchItem, setSearchItem] = useState('');
    console.log(searchItem);

    return <>
    <div className=" store-header ">
    <h1>Curiosity Shop</h1>
     <input className="search-box" type="search" onChange={(e)=> setSearchItem(e.target.value)} placeholder="Search Curiosity Shop" />
    </div>
   
    <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.filter((item)=>item.name.toLowerCase().includes(searchItem) || item.name.toUpperCase().includes(searchItem)).map(item =>(
        <Col key={item.id}>
            <StoreItem {...item}/>
        </Col>
            ))} 
    </Row>
    </>
}