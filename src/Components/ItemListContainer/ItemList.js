import Item from "./Item/Item"

const ItemList =({products}) => {
        return (
            <ul className="ListGroup">
                {products.map(product=><Item key={products.id}products={product}/>)}

            </ul>

        )
}




export default ItemList 