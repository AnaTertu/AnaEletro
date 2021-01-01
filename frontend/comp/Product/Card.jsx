const Card = () => {
  const [products, setProduct] = React.useState([]);
  
  React.useEffect(async () => {
    const url = "http://www.localhost/react-php/backend/product.php";
    const response = await fetch(url);
    setProduct(await response.json());
  }, []);

  return (
    <div className="container nav align-items-right justify-content-between">

      <CardCateg
        products={products}
      />

      { products.map((prod) => (
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
