const CardIndexOrder = () => {
    const [order, setOrder] = React.useState([])
    const [renderOrder, setRenderOrder] = React.useState(false)
    const [msgconf, setMsgconf] = React.useState(false)

    React.useEffect(async () => {
        const url = "http://www.localhost/react-php/backend";
        const resp = await fetch(url);
        setOrder(await resp.json());
    }, [])

    function registerOrd(eventorder){
        eventorder.preventDefault();

        let formDat = new FormDat(eventorder.target);

        const url = "http://www.localhost/react-php/backend/register-order.php";

        
         fetch(url, {
            method: "POST",
            body: formDat
        })  
            .then((resp) => resp.json())
            .then((dados)=> {
                setRenderOrder(!renderOrder);
                setMsgconf(dados);

                setTimeout(() => {
                    setMsgconf(false);
                }, 3000);
        })
    }

    return (
        <div clasName="container py-5">

            <div className="card w-50 mx-auto mt-3 border-0">
                <form  class="form-inline" onSubmit={registerOrd}>
                    <input className="form-group mt-2" type="text" name="namesC" placeholder="Nome"/>
                    <input className="form-group mt-2" type="number" name="phonesC" placeholder="Telefone: "/>
                    <input className="form-group mt-2" type="text" name="addressC" placeholder="Endereço: "/>
                    <input className="form-group mt-2" type="text" name="descriptionProducts" placeholder="Descrição do produto: "/>
                    {/* <input className="form-group mt-2" type="text" name="pricesEnd" placeholder="Valor unitário: "/> */}
                    <input className="form-group mt-2" type="number" name="amount" placeholder="Quantidade: "/>
                    
                    <button className="btn btn-info w-100 w-2">
                        Escolha de produtos                 
                    </button>
                    {msgconf && <div className="alert alert-success mx-auto mt-4 w-50" role="alert">
                        Produtos no carrinho de compras!!
                        </div>}
                </form>
            </div>            
        </div>
    );
}
