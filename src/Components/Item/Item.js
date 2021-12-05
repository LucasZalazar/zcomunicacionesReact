import ItemCount from "../ItemCount/ItemCount"

const Item = ({products}) => {
    const handleOnAdd = () =>{
        console.log("agregaste el producto al carrito")
    }
        return(
            <div className="CardItem">
                <div className="ContainerItem">
                    <h2 className="ItemHeader">
                        {products.nombre}
                    </h2>

                </div>
                <p className="Info">
                    Categoria : {products.categoria_id}
                </p>

                <p className="Info">
                    Precio:{products.precio}
                </p>
                <ItemCount stock={products.stock} onAdd={handleOnAdd}  initial ={1} /> 
                <button>Ver detalle</button>


            </div>




        )


}







export default Item