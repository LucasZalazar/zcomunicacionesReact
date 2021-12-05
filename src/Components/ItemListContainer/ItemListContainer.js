const ItemListContainer = () => {

        const products =[
            { id: 1 , nombre : `iphone 12` , precio : `50000` , categoria : `smartphone`, stock : 5},
            { id: 2 , nombre : `motorola moto g7` , precio : `20000` , categoria : `smartphone`, stock : 10},
            {id: 3 , nombre : `samsung z flip` , precio : `70000` , categoria : `smartphone` , stock : 7}
        ];


        return (
            <div className="ItemListContainer">
                <Div>
                    <input type="text"/>
                    <button>Buscar</button>
                </Div>
                <ItemList Products ={products}/>



            </div>



        )



}

export default ItemListContainer