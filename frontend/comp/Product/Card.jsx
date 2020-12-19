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
                                <h6><strike>
                                    {products.map((element, props) => (
                                        [ element.prices, ...props]
                                    ))} 
                                </strike></h6>
                                <h4>
                                    {products.map((element, props) => (
                                        [ element.pricesEnd, ...props]
                                    ))}                                    
                                </h4>
                            </div>
                        </div>
                    </div>

                    <main className="container nav align-items-right justify-content-between">
                    
                        <article className="card mx-auto mt-5" style={{width:"300px"}} onClick={zoom}>
                            <div  className="card-bady d-flex justify-content-center">
                                <img src="../imagens/geladeira_brastemp.jpg" width="150px" onclick="destaque(this)" />
                                <br />
                                <p className="descricao">Geladeira Frost Free Brastemp Side Inverse 540 litros</p>
                                <hr />
                                <p className="descricao"><strike>R$6.389,00</strike></p><br />
                                <p className="preco">R$5.019,00</p>
                            </div>
                            <div className="card-bady d-flex justify-content-center">
                                <img src="../imagens/refrigerador_brastemp.PNG" width="150px" onclick="destaque(this)" />
                                <br />
                                <p className="descricao">Geladeira Frost Free Brastemp Branca 375 litros</p>
                                <hr />
                                <p className="descricao"><strike>R$2.068,60</strike></p><br />
                                <p className="preco">R$1.910,90</p>
                            </div>
                            <div className="card-bady d-flex justify-content-center">
                                <img src="../imagens/refrigerador_consul.PNG" width="150px" onclick="destaque(this)" />
                                <br />
                                <p className="descricao">Geladeira Frost Free Consul Prata 340 litros</p>
                                <hr />
                                <p className="descricao"><strike>R$2.199,90</strike></p><br />
                                <p className="preco">R$2.069,00</p>
                            </div>
                            <div className="card-bady d-flex justify-content-center">
                                <img src="../imagens/fogao_consul.jpg" width="150px" onclick="destaque(this)" />
                                <br />
                                <p className="descricao">Fogão 4 Bocas Consul Inox com Mesa de Vidro</p>
                                <hr />
                                <p className="descricao"><strike>R$1,150,00</strike></p><br />
                                <p className="preco">R$1.129,00</p>
                            </div>
                            <div className="card-bady d-flex justify-content-center">
                                <img src="../imagens/fogao_monaco.jpeg" width="150px" onclick="destaque(this)" />
                                <br />
                                <p className="descricao">Fogão de Piso 4 Bocas Atlas Monaco com Acendimento Automático</p>
                                <hr />
                                <p className="descricao"><strike>R$609,00</strike></p><br />
                                <p className="preco">R$519,70</p>
                            </div>
                            <div className="card-bady d-flex justify-content-center">
                                <img src="../imagens/microndas_consul.PNG" width="150px" onclick="destaque(this)" />
                                <br />
                                <p className="descricao" id="microondas">Microondas Consul 32 litros Inox 220V</p>
                                <hr />
                                <p className="descricao"><strike>R$580,00</strike></p><br />
                                <p className="preco">R$409,88</p>
                            </div>
                            <div className="card-bady d-flex justify-content-center">
                                <img src="../imagens/microondas_philco.PNG" width="150px" onclick="destaque(this)" />
                                <br />
                                <p className="descricao">Microondas 25 litros Espelhado Philco 220</p>
                                <hr />
                                <p className="descricao"><strike>R$508,70</strike></p><br />
                                <p className="preco">R$464,53</p>
                            </div>
                            <div className="card-bady d-flex justify-content-center">
                                <img src="../imagens/microondas_electroluz.jpeg" width="150px" onclick="destaque(this)" />
                                <br />
                                <p className="descricao">Forno de Microondas Electroluz 20L Branco 110V</p>
                                <hr />
                                <p className="descricao"><strike>R$459,90</strike></p><br />
                                <p className="preco">R$436,05</p>
                            </div>
                            <div className="card-bady d-flex justify-content-center">
                                <img src="../imagens/lava_loucas_electroux.jpg" width="150px" onclick="destaque(this)" />
                                <br />
                                <p className="descricao">Lava-Louça Electrolux Inox com 10 serviços, 6 programas de lavagens</p>
                                <hr />
                                <p className="descricao"><strike>R$3.599,00</strike></p><br />
                                <p className="preco">R$2.799,90</p>
                            </div>
                            <div className="card-bady d-flex justify-content-center">
                                <img src="../imagens/lava_loucas_brastemp.jpg" width="150px" onclick="destaque(this)" />
                                <br />
                                <p className="descricao">Lava-Louças Compacta 8 serviços Branca 127v Brastemp</p>
                                <hr />
                                <p className="descricao"><strike>R$1.970,50</strike></p><br />
                                <p className="preco">R$1.730,61</p>
                            </div>
                            <div className="card-bady d-flex justify-content-center">
                                <img src="../imagens/lavadora_brastemp.jpg" width="150px" onclick="destaque(this)" />
                                <br />
                                <p className="descricao">Lavadadora de Roupas Brastemp 11kg com Turbo Performace Branca</p>
                                <hr />
                                <p className="descricao"><strike>R$1.699,00</strike></p><br />
                                <p className="preco">R$1.214,100</p>
                            </div>
                            <div className="card-bady d-flex justify-content-center">
                                <img src="../imagens/lavadora_philco.jpeg" width="150px" onclick="destaque(this)" />
                                <br />
                                <p className="descricao">Lavadora Philco Inverter 12kg</p>
                                <hr />
                                <p className="descricao"><strike>R$2.399,90</strike></p><br />
                                <p className="preco">R$2.179,90</p>
                            </div>
                        </article>
                </main>

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

