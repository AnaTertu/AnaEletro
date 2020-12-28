const Card = () => {
    const [products, setProduct] = React.useState([])
   
    React.useEffect(async () => {
        const url = "http://www.localhost/react-php/backend/product.php";
        const response = await fetch(url);
        setProduct(await response.json());
    }, [])

    function zoom() { 
        const prod = document.getprodById('prod');

        if (prod.style.width =="100px") {
            prod.style.width = "200px"
        } else {
            prod.style.width = "100px"
        }
    }

    function WarningBanner(props) {
        if (!props.warn) {
          return null;
        }
      
        return (
          <div className="warning">
            Warning!
          </div>
        );
      }
      
      class Page extends React.Component {
        constructor(props) {
          super(props);
          this.state = {showWarning: true};
          this.handleToggleClick = this.handleToggleClick.bind(this);
        }
      
        handleToggleClick() {
          this.setState(state => ({
            showWarning: !state.showWarning
          }));
        }

        render() {
            return (
              <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                  {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
              </div>
            );
          }
        }
        

       
 
        return (

            <div className="container nav align-items-right justify-content-between">
                  
                    <div className="card w-40 h-50 mx-1 mt-3"> 
                        <h4> Categoria </h4>
                        <ul>
                            <li> Todos ({products.length}) </li>
                            <li> Geladeiras ({products.filter(product => product.idCategory==1).length}) </li>
                            <li> Fogões ({products.filter(product => product.idCategory==2).length}) </li>
                            <li> Microondas ({products.filter(product => product.idCategory==3).length}) </li>
                            <li> Lavadoura de roupa ({products.filter(product => product.idCategory==4).length}) </li>
                            <li> Lava-louças ({products.filter(product => product.idCategory==4).length}) </li>
                        </ul>
                        
                    </div> 
                    
                    <div style={{display:"inline-block", width: "25%", height: "150px"}}>
                     
                        {products.map((prod) =>{
                        return (
                            <div>

                                <div className="card mx-auto mt-5 d-inline-block justify-content-sm-center" style={{width:"300px"}} onClick={zoom}>

                                    <div className="card-bady d-flex justify-content-center">
                                        <img width="100" id="prod" src=
                                            {products.map((prod, props) => (
                                                [prod.imageProducts, ...props]
                                            ))[[0]]}
                                            alt=
                                            {products.map((prod, props) => (
                                                [prod.category, ...props]
                                            ))[[0]]}></img>
                                            
                                    </div>
                                    <div className="card-header text-center">
                                        <h5>
                                            {products.map((prod, props) => (
                                                [ prod.descriptionProducts, ...props]
                                            ))[[0]]}                                    
                                        </h5>
                                    </div>
                                    <div className="card-header text-center">
                                        <h6>
                                            {products.map((prod, props) => (
                                                [ prod.prices, ...props]
                                            ))[[0]]}                                    
                                        </h6>
                                        <h4>
                                            {products.map((prod, props) => (
                                                [ prod.pricesEnd, ...props]
                                            ))[[0]]}                                    
                                        </h4>
                                        
                                    </div>
                                
                                </div>

                            </div>
                        ) })}
                    
                        <div className="card mx-auto mt-5 d-inline-block justify-content-sm-center" style={{width:"300px"}} onClick={zoom}>

                            <div className="card-bady d-flex justify-content-center">
                                <img width="100" id="prod" src=
                                {products.map((prod, props) => (
                                [prod.imageProducts, ...props]
                                ))[[1]]}
                                alt=
                                {products.map((prod, props) => (
                                [prod.category, ...props]
                                ))[[1]]}></img>

                            </div>
                            <div className="card-header text-center">
                            <h5>
                            {products.map((prod, props) => (
                            [ prod.descriptionProducts, ...props]
                            ))[[1]]}                                    
                            </h5>
                            </div>
                            <div className="card-header text-center">
                            <h6>
                            {products.map((prod, props) => (
                            [ prod.prices, ...props]
                            ))[[1]]}                                    
                            </h6>
                            <h4>
                            {products.map((prod, props) => (
                            [ prod.pricesEnd, ...props]
                            ))[[1]]}                                    
                            </h4>
                            </div>
                        </div>

                    </div>

                        <div ClassName= "container" >
                            {products.map((prod) =>{
                            return (
                            <main ClassName="container-fluid" style = {{paddingLeft: "32px"}}>
                                
                            <section>
                            <div id="container" style={{display:"inline-block", width: "25%", height: "150px"}}>
                            
                                <div key={prod.idproducts} className={`secProdutos text-dark ${prod.category}`}>
                                <figure>
                                <img onClick={zoom} src= {prod.imageProducts} alt= {prod.category}/>
                                </figure>
                                <figcaption>
                                {prod.names} {prod.descriptionProducts}
                                <hr/>
                                <s>R${prod.prices}</s><br/>
                                <b>R${prod.pricesEnd}</b>
                                </figcaption>
                                </div>
                                
                            </div>                              
                            </section>
                            </main>
                            ) })}
                        </div> 
                      
        </div>  
        
                
        
         
        
        
    );
}
