const CardOrder = () => {
    const [order, setOrder] = React.useState([])
    const [render, setRender] = React.useState(false)
    const [msg, setMsg] = React.useState(false)

    React.useEffect(async () => {
        const url = "http://www.localhost/react-php/backend";
        const response = await fetch(url);
        setOrder(await response.json());
    }, [])

    function registerClient(event){
        event.preventDefault();
       // console.log(event.target);

        let formData = new FormData(event.target);

        const url = "http://www.localhost/react-php/backend/register-order";

        
         fetch(url, {
            method: "POST",
            body: formData
        })  
            .then((response) => response.json())
            .then((dados)=> {
                setRender(!render);
                setMsg(dados);

                setTimeout(() => {
                    setMsg(false);
                }, 3000);
        })
    }

    return (
        <div clasName="container py-5">

            <div className="card w-50 mx-auto mt-3 border-0">
                <form onSubmit={registerClient}>
                    <input className="form-control mt-2" type="text" name="namesC" placeholder="Nome"/>
                    <input className="form-control mt-2" type="text" name="phonesC" placeholder="Telefone: "/>
                    <input className="form-control mt-2" type="text" name="addressC" placeholder="Endereço: "/>
                    <input className="form-control mt-2" type="text" name="descriptionProducts" placeholder="Descrição do produto: "/>
                    <input className="form-control mt-2" type="text" name="pricesEnd" placeholder="Valor unitário: "/>
                    <input className="form-control mt-2" type="text" name="amount" placeholder="Quantidade: "/>
                    <button className="btn btn-info w-100 w-2">quantidade</button>
                </form>
            </div>

            {msg && <div className="alert alert-success mx-auto mt-4 w-50" role="alert">
                Cadastro realizado com sucesso!!
                </div>}

            
        </div>
    );
}
