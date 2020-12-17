const Card = () => {
    const [people, setPeople] = React.useState([])
    const [render, setRender] = React.useState(false)
    const [msg, setMsg] = React.useState(false)

    React.useEffect(async () => {
        const url = "http://www.localhost/react-php/backend";
        const response = await fetch(url);
        setPeople(await response.json());
    }, [])

    function registerClient(event){
        event.preventDefault();
       // console.log(event.target);

        let formData = new FormData(event.target);

        const url = "http://www.localhost/react-php/backend/register-client.php";

         //padrão Get pega dados recuperadados ,, pra onde está sendo enviado é POST 
        //GET - 1 Parametro
        //POST - 2 Parametros
        //GET e POST
        //fetch inseri dados e then recupera dados
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

            {people.map((element) => {
                return (
                    <div key={element.id} className="card w-50 mx-auto mt-3"> 
                        <div className="card-header">
                            {element.names}
                        </div>
                        <div className="card-body">
                            Telefone: {element.phones}
                        </div>
                        <div className="card-footer">
                            mensagem: {element.posts}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}
