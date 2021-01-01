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

      { products.map ((prod) => ( 
        <React.Fragment key={prod.idproducts}>
        <CardItem
        image={prod.imageProducts}
        category={prod.category}
        description={prod.descriptionProducts}
        prices={prod.prices}
        pricesEnd={prod.pricesEnd}
        />
        </React.Fragment>
      ) )}
      
    </div> 
  );
}
