import InfoItem from "../InfoItem/infoItem.component";
import "./card.component.css"

function Card(props) {
   return (
      <div className="cartas">
         <InfoItem 
            img={props.items[0].img}
            name={props.items[0].name}
            description={props.items[0].description}
            price={props.items[0].price}
         />
         <InfoItem 
            img={props.items[1].img}
            name={props.items[1].name}
            description={props.items[1].description}
            price={props.items[1].price}
         />
         <InfoItem 
            img={props.items[2].img}
            name={props.items[2].name}
            description={props.items[2].description}
            price={props.items[2].price}
         />
      </div>
   )
}

export default Card;