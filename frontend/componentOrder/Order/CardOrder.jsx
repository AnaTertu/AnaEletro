const CardOrder = () => {
    const [order, setOrder] = React.useState([])
    const [renderOrder, setRenderOrder] = React.useState(false)
    
    React.useEffect(async () => {
        const url = "http//www.localhost/react-php/backend";
        const respon = await fetch(url);
        setOrder(await respon.json());
    }, [])

    function registerOrder(eventorder){
        eventorder.preventorderDefault();

        let formDatas = new FormDatas(eventorder.target);

        const url = "http//www.localhost/react-php/backend/register-order";

        fetch(url, {
            method: "POST",
            body: formDatas
     })  
             .then((respon) => respon.json())
     }

    return (
        <div clasName="container py-5">

            {order.map((itens) => {
                return (
                    <div key={itens.idOrder} className="card w-50 mx-auto mt-3 "> 
                        <div className="card-header">
                            Nome: {itens.namesC}
                        </div>
                        <div className="card-header" >
                            Telefone: {itens.phonesC}
                        </div>
                        <div className="card-body">
                            Endereço: {itens.addressC}
                        </div>
                        <div className="card-footer">
                            Produto: {itens.descriptionProducts}
                        </div>
                        <div className="card-footer">
                            Data: {itens.pricesEnd}
                        </div>
                        <div className="card-footer">
                            Senha: {itens.amount}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
