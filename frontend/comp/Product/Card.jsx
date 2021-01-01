const Card = () => {
  const [products, setProduct] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  
  React.useEffect(async () => {
    const url = "http://www.localhost/react-php/backend/product.php";
    const response = await fetch(url);
    const prods = await response.json();
    setProduct(prods);
    setFilteredProducts(prods);
  }, []);



   function exibir(event){
     
    const categoria = event.currentTarget.dataset.id;
    console.log(categoria)
    if (categoria) {
        console.log("filtrado")
    } else {
      console.log("todos")
    }
  }

  return (
    <div className="container nav align-items-right justify-content-between">

      <CardCateg
        products={products}
        exibir={exibir}
      />

      { filteredProducts.map((prod) => (
        <React.Fragment key={prod.idproducts}>
          <CardItem
            image={prod.imageProducts}
            category={prod.category}
            description={prod.descriptionProducts}
            prices={prod.prices}
            pricesEnd={prod.pricesEnd}
          />
        </React.Fragment>
      ))}

    </div>
  );
}
