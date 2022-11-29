// import React, {Component} from 'react'
import './button.css'

const sayHello = () =>{
    console.log('Olá')
}

const Button = (props) =>{
    return <button className="btn" onClick={sayHello}>{props.label}</button>
}

// class Button extends Component{
//     render(){
//         return <button className="btn">{this.props.label}</button>
//     }
// }

Button.defaultProps ={
    label: 'Clique Aqui'
}
export default Button