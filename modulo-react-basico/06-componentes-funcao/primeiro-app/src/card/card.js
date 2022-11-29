import React from "react";
import "./card.css";

const Card = ({children, color, showCardColor}) => {
  return (
    <div className="card" style={{backgroundColor: color}} onClick={() => showCardColor(color)}>
      {children}
    </div>
  );
};

Card.defaultProps = {
  color: 'orange'
}
// class Card extends React.Component{
//     render(){
//         console.log(this.props) // o this. é de uso só decomponentes de class
//         return(
//             <div className="card">
//                 <h1>{this.props.title}</h1>
//                     <p>Esse é o texto do Card.</p>
//             </div>
//         )
//     }
// }


export default Card;
