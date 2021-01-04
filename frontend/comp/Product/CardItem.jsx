const CardItem = (props) => {

    function zoom(event) {
        const cardItem = event.currentTarget.querySelector('img');
        if (cardItem.style.width == "100px") {
            cardItem.style.width = "200px"
        } else {
            cardItem.style.width = "100px"
        }
    }

    return (
        <div
            className="card mx-auto mt-5 d-inline-block justify-content-sm-center"
            style={{ width: "300px", cursor:'zoom-in' }}
            onClick={zoom}
        >

            <div className="card-bady d-flex justify-content-center">
                <img width="100" id="cardItem" src={props.image} alt={props.category}></img>
            </div>
            
            <div className="card-header text-center">
                <h5>
                    {props.description}
                </h5>
            </div>
            <div className="card-header text-center">
                <h6>
                    <strike>
                        {props.prices}
                    </strike>
                </h6>
                <h4>
                    {props.pricesEnd}
                </h4>
            </div>
        </div>
    );
}
