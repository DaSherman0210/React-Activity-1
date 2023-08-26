import imagenCamisa from "./components/Card/assets/whiteT-shirt.jpeg";
import imagenBilletera from "./components/Card/assets/wallet.jpg";
import imagenTaza from "./components/Card/assets/cup.jpg";

import Card from "./components/Card/card.component";

function App() {

   const cards = [
      {
         img: imagenCamisa,
         name: "T-Shirt",
         description: "A White T-Shirt",
         price: 35
      },
      {
         img: imagenBilletera,
         name: "Wallet",
         description: "A fancy wallet",
         price: 20
      },
      {
         img: imagenTaza,
         name: "Cup",
         description: "A tea cup",
         price: 5
      }
   ]

   return(
      <div className="main">
         <h1>E-Commerce in React and SnipCart</h1>
         <Card items={cards}></Card>
      </div>
   )
}

export default App;