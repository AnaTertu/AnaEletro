const Card = () => {
    const [products, setProduct] = React.useState([])
 //   const [but, setBut] = React.useState([])

    React.useEffect(async () => {
        const url = "http://www.localhost/react-php/backend/product.php";
        const response = await fetch(url);
        setProduct(await response.json());
    }, [])

    function zoom() { 
        const prod = document.getElementById('prod');

        if (prod.style.width =="100px") {
            prod.style.width = "200px"
        } else {
            prod.style.width = "100px"
        }
    }

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

                    <div>
                        <div className="card mx-auto mt-5" style={{width:"300px"}} onClick={zoom}>

                            <div className="card-bady d-flex justify-content-center">
                                <img width="100" id="prod" src=
                                    {products.map((element, props) => (
                                        [element.imageProducts, ...props]
                                    ))}
                                    alt=
                                    {products.map((element, props) => (
                                        [element.category, ...props]
                                    ))}></img>
                            </div>
                            <div className="card-header text-center">
                                <h5>
                                    {products.map((element, props) => (
                                        [ element.descriptionProducts, ...props]
                                    ))}                                    
                                </h5>
                            </div>
                            <div className="card-header text-center">
                                <h6>
                                    {products.map((element, props) => (
                                        [ element.prices, ...props]
                                    ))}                                    
                                </h6>
                                <h4>
                                    {products.map((element, props) => (
                                        [ element.pricesEnd, ...props]
                                    ))}                                    
                                </h4>
                            </div>
                        </div>
                    </div>

                    {/* <div container >
                        <main ClassName="container-fluid" style = {{paddingLeft: "32px"}}>
                            <hr/>
                            <Category/>
                            <section>
                                <div id="container">
                                    {produtos.map(element =>
                                        <div key={element.idproducts} className={`secProdutos text-dark ${element.category}`}>
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
                    </div> */}
            </div>                             
    );
}

