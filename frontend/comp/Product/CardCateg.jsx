const CardCateg = (props) => {

    return (
        <div className="card w-40 h-50 mx-1 mt-3">
            <h4> Categoria </h4>
            <ul>
                <li>
                    Todos ({props.products.length})
            </li>
                <li>
                    Geladeiras ({props.products.filter(product => product.idCategory == 1).length})
            </li>
                <li>
                    Fogões ({props.products.filter(product => product.idCategory == 2).length})
            </li>
                <li>
                    Microondas ({props.products.filter(product => product.idCategory == 3).length})
            </li>
                <li>
                    Lavadoura de roupa ({props.products.filter(product => product.idCategory == 4).length})
            </li>
                <li>
                    Lava-louças ({props.products.filter(product => product.idCategory == 5).length})
            </li>
            </ul>
        </div>

    );

}