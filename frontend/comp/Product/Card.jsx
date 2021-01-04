const Card = () => {
  const [products, setProduct] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  
  React.useEffect(async () => {
    const url = "http://localhost/react-versiculos/backend/product.php";
    const response = await fetch(url);
    const prods = await response.json();
    setProduct(prods);
    setFilteredProducts(prods);
  }, []);



   function exibirProdutos(event){
     
    const idCategoria = event.currentTarget.dataset.id;
    console.log(idCategoria)
    if (idCategoria) {
      setFilteredProducts(products.filter(product => product.idCategory==idCategoria))
    } else {
      setFilteredProducts(products)
    }
  }

  return (
    <div className="container nav align-items-right justify-content-between">

      <CardCateg
        products={products}
        exibir={exibirProdutos}
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
