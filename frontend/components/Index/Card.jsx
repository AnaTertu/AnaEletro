const Card = () => {
    const [people, setPeople] = React.useState([])

    React.useEffect(async () => {
        const url = "http://www.localhost/react-php/backend";
        const response = await fetch(url);
        setPeople(await response.json());
    }, [])

    function registerClient(event){
        event.preventDefault();
       // console.log(event.target);

        let formData = new FormData(event.target)

        const url = "http://www.localhost/react-php/backend/register-client.php";

         //padrão Get pega dados recuperadados ,, pra onde está sendo enviado é POST 
        fetch(url, {
            method: "POST",
            body: formData

        })

    }

    return (
        <div clasName="container py-5">

            <div className="card w-50 mx-auto mt-3 border-0">
                <form onSubmit={registerClient}>
                    <input className="form-control mt-2" type="text" name="names" placeholder="Nome"/>
                    <input className="form-control mt-2" type="text" name="phones" placeholder="Telefone: "/>
                    <input className="form-control mt-2" type="text" name="posts" placeholder="Mensagem: "/>
                    <button className="btn btn-info w-100 w-2">Envio de mensagem</button>
                </form>
            </div>
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