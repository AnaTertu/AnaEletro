const Card = () => {
    const [products, setProduct] = React.useState([])
    const [but, setBut] = React.useState([])

    // React.butEffect(async () => {
    //     const url = "http://www.localhost/react-php/frontend/image.php";
    //     const response = await fetch(url);
    //     setBut(await response.json());
    // }, [])

    React.useEffect(async () => {
        const url = "http://www.localhost/react-php/backend/product.php";
        const response = await fetch(url);
        setProduct(await response.json());
    }, [])

    return (
        
        
            <div className="container nav align-items-right justify-content-between">

                    <div className="card w-50 mx-1 mt-3"> 
                        <h4> Categoria </h4>
                    
                        <ul>
                            <li onShowAllButtonClick> Todos (12) </li>
                            <li onFilterCategoryClick> Geladeiras (3) </li>
                            <li onFilterCategoryClick> Fogões (2) </li>
                            <li onFilterCategoryClick> Microondas (3) </li>
                            <li onFilterCategoryClick> Lavadoura de roupa (2) </li>
                            <li onFilterCategoryClick> Lava-louças (2) </li>
                        </ul>
                        
                    </div> 
                    <div container >
                        <main style = {{paddingLeft: "32px"}}>
                            <section>
                            
                                <img image= {products.map((element) => (
                                    element.imageProducts      
                                )) } alt= {products.map((element) => (
                        
                                    element.category           
                                )) }/>

                                 <h2>{products.map((element) => (
                        
                                    element.descriptionProducts           
                                )) }</h2>
                                <p> {products.map((element) => (
                        
                                    element.prices           
                                )) }</p>
                                <h3>{products.map((element) => (
                        
                                    element.pricesEnd          
                                )) }</h3>
                                

                            </section>
                        </main>
                    </div>
                </div>                             
    );
}

