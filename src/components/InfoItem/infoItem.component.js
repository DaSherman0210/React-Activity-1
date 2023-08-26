import "./infoItem.component.css";

function InfoItem(props) {
    return (
        <div className="fullCard">
            <div className="cardBody">
                <div className="imagen">
                    <img src={props.img} width="270px" height="280px" />
                </div>
                <div className="info">
                    <h2 className="h2--1"><strong>{props.name}</strong></h2>
                    <p>{props.description}</p>
                    <h2><strong>${props.price}</strong></h2>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default InfoItem;