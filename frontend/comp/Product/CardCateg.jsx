const CardCateg = (props) => {
    const [categories, setCategories] = React.useState([]);

    React.useEffect(async () => {
        const url = "http://192.168.0.164/react-versiculos/backend/category.php";
        const response = await fetch(url);
        setCategories(await response.json());
    }, []);

    return (

        <div className="card w-40 h-50 mx-1 mt-3">
            <h4> Categoria </h4>
            <ul>
            <li onClick={props.exibir} style={{cursor:'pointer'}}>
                    Todos ({props.products.length})
                </li>
                {categories.map((categ) =>(
                    <React.Fragment key={categ.idCategory}>
                        <li onClick={props.exibir} data-id={categ.idCategory} style={{cursor:'pointer'}}>

                            {categ.category} ({props.products.filter(product => product.idCategory == categ.idCategory).length})

                            
                        </li>
                    </React.Fragment>
                )
                )}
               
               
            </ul>
        </div>

        // <div className="card w-40 h-50 mx-1 mt-3">
        //     <h4> Categoria </h4>
        //     <ul>
        //         <li>
        //             Todos ({props.products.length})
        //     </li>
        //         <li>
        //             Geladeiras ({props.products.filter(product => product.idCategory == 1).length})
        //          </li>
        //         <li>
        //             Fogões ({props.products.filter(product => product.idCategory == 2).length})
        //     </li>
        //         <li>
        //             Microondas ({props.products.filter(product => product.idCategory == 3).length})
        //     </li>
        //         <li>
        //             Lavadoura de roupa ({props.products.filter(product => product.idCategory == 4).length})
        //     </li>
        //         <li>
        //             Lava-louças ({props.products.filter(product => product.idCategory == 5).length})
        //     </li>
        //     </ul>
        // </div>

    );

}