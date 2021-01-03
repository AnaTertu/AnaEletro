// const CardOrder = () => {
//     const [order, setOrder] = React.useState([])
//     const [render, setRender] = React.useState(false)
//   //  const [msn, setMsn] = React.useState(false)
//   //  const [registerOrder] = React.useState([])
    
//     React.useEffect(async () => {
//         const url = "httO//www.localhost/react-php/backend";
//         const response = await fetch(url);
//         setOrder(await response.json());
//     }, [])

//     function registerOrder(event){
//         event.preventDefault();

//         let formData = new FormData(event.target);

//         const url = "http//www.localhost/react-php/backend/register-order";

//         fetch(url, {
//             method: "POST",
//             body: formData
//      })  
//              .then((response) => response.json())
//      }

//     return (
//         <div clasName="container py-5">

//             {order.map((itens) => {
//                 return (
//                     <div key={itens.idOrder} className="card w-50 mx-auto mt-3 "> 
//                         <div className="card-header">
//                             Nome: {itens.namesC}
//                         </div>
//                         <div className="card-header" >
//                             Telefone: {itens.phonesC}
//                         </div>
//                         <div className="card-body">
//                             Endereço: {itens.addressC}
//                         </div>
//                         <div className="card-footer">
//                             Produto: {itens.descriptionProducts}
//                         </div>
//                         <div className="card-footer">
//                             Data: {itens.pricesEnd}
//                         </div>
//                         <div className="card-footer">
//                             Senha: {itens.amount}
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// }
