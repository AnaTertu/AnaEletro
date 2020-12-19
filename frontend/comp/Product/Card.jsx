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
                        <main ClassName="container-fluid" style = {{paddingLeft: "32px"}}>
                            <hr/>
                            <Category/>
                            <section>
                                <div id="container">
                                    {produtos.map(element =>
                                        <div key={element.idproducts} className={`secProdutos text-dark ${item.category}`}>
                                            <figure>
                                                <img onClick={exibirZoom} className="descriptionProducts"
                                                data-toggle="modal" data-target=".bd-exemple-modal-sm" id={elementement.idproducts} src={requestAnimationFrame(`url ${element.imageProducts}`).default} alt= {products.map((element) => (
                                                    element.category           
                                                    )) }/>
                                            </figure>
                                            <figcaption>
                                                {element.names} {element.descriptionProducts}
                                                <hr/>
                                               <s>R${element.price}</s><br/>
                                               <b className="priceEnd">R${element.priceName</b>
                                            </figcaption>
                                            <button className="btnCompra" oncClick={copy}><Link to={() => "/Pedido/" + element.idproducts}>Comprar</Link></button>
                                                    
                                        </div>
                                    )}
                                </div>                              
                            </section>
                        </main>
                    </div>
                </div>                             
    );
}

