import InfoItem from "../productData/productData.component";
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
         <InfoItem 
            img={props.items[3].img}
            name={props.items[3].name}
            description={props.items[3].description}
            price={props.items[3].price}
         />
         <InfoItem 
            img={props.items[4].img}
            name={props.items[4].name}
            description={props.items[4].description}
            price={props.items[4].price}
         />
         <InfoItem 
            img={props.items[5].img}
            name={props.items[5].name}
            description={props.items[5].description}
            price={props.items[5].price}
         />
      </div>
   )
}

export default Card;