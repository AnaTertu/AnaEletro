const Card = () => {
  const [products, setProduct] = React.useState([]);

  React.useEffect(async () => {
    const url = "http://www.localhost/react-php/backend/product.php";
    const response = await fetch(url);
    setProduct(await response.json());
  }, []);

  return (
    <div className="container nav align-items-right justify-content-between">
      
      <div className="card w-40 h-50 mx-1 mt-3">
        <h4> Categoria </h4>
        <ul>
          <li> 
            Todos ({products.length}) 
          </li>
          <li> 
            Geladeiras ({products.filter(product => product.idCategory == 1).length})
          </li>
          <li>
            Fogões ({products.filter(product => product.idCategory == 2).length})
          </li>
          <li>
            ]Microondas ({products.filter(product => product.idCategory == 3).length})
          </li>
          <li>
            Lavadoura de roupa ({products.filter(product => product.idCategory == 4).length})
          </li>
          <li>
            Lava-louças ({products.filter(product => product.idCategory == 4).length})
          </li>
        </ul>
      </div>

      <div 
        className="card mx-auto mt-5 d-inline-block justify-content-sm-center" 
        style={{ width: "300px" }} 
      >

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
              [prod.descriptionProducts, ...props]
            ))[[0]]}
          </h5>
        </div>
        <div className="card-header text-center">
          <h6>
            {products.map((prod, props) => (
              [prod.prices, ...props]
            ))[[0]]}
          </h6>
          <h4>
            {products.map((prod, props) => (
              [prod.pricesEnd, ...props]
            ))[[0]]}
          </h4>

        </div>
        
      </div>
    </div>
  );
}
