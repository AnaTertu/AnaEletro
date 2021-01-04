const Card = () => {
    const [people, setPeople] = React.useState([])
    const [render, setRender] = React.useState(false)
    const [msg, setMsg] = React.useState(false)
  
    React.useEffect(async () => {
        const url = "http://192.168.0.164/react-versiculos/backend";
        const response = await fetch(url);
        setPeople(await response.json());
    }, [])

    function registerClient(event){
        event.preventDefault();

        let formData = new FormData(event.target);

        const url = "http://192.168.0.164/react-versiculos/backend/register-client.php";

        
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
                    <input className="form-control mt-2" type="text" name="nameC" placeholder="Nome: "/>
                    <input className="form-control mt-2" type="email" name="email" placeholder="E-mail: " />
                                        
                    <input className="form-control mt-2" type="number" name="phones" placeholder="Telefone: "/>
                    <input className="form-control mt-2" type="text" name="posts" placeholder="Mensagem: "/>
                    <input className="form-control mt-2" type="password" name="passwords" placeholder="Senha: "/>
                    
                    <button className="btn btn-info w-100 w-2">
                        Envio de mensagem                    
                    </button>
                    
                    {msg && <div className="alert alert-success mx-auto mt-4 w-50" role="alert">
                        Cadastro realizado com sucesso!!
                    </div>}
                </form>
            </div>            
        </div>
    );
}
