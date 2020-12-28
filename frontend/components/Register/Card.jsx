const Card = () => {
    const [people, setPeople] = React.useState([])
    const [render, setRender] = React.useState(false)
    const [msn, setMsn] = React.useState(false)

    React.useEffect(async () => {
        const url = "http://www.localhost/react-php/backend";
        const response = await fetch(url);
        setPeople(await response.json());
    }, [])

    function registerClient(event){
        event.preventDefault();
       // console.log(event.target);

        let formData = new FormData(event.target);

        const url = "http://www.localhost/react-php/backend/register-client";

        fetch(url, {
            method: "POST",
            body: formData
        })  
            .then((response) => response.json())
            .then((dados)=> {
                setRender(!render);
                setmsn(dados);

                setTimeout(() => {
                    setmsn(false);
                }, 3000);
        })
    }

    return (
        <div clasName="container py-5">

            {people.map((person) => {
                return (
                    <div key={person.idpeople} className="card w-50 mx-auto mt-3 "> 
                        <div className="card-header">
                            Nome: {person.nameC}
                        </div>
                        <div className="card-header" >
                            E-mail: {person.email}
                        </div>
                        <div className="card-body">
                            Telefone: {person.phones}
                        </div>
                        <div className="card-footer">
                            Mensagem: {person.posts}
                        </div>
                        <div className="card-footer">
                            Data: {person.dates}
                        </div>
                        {/* <div className="card-footer">
                            Senha: {person.passwords}
                        </div> */}
                    </div>
                )
            })}
        </div>
    );
}
