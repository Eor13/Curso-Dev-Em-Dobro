import { useState } from "react";
const Form = (props) =>{
    const [inputs, setInputs] = useState({
        image: '',
        value: '',
        suit: ''
    })

    const handleInputChange = (event) =>{ //handle é lidar com
        const {target} = event
        const {name} = target
        const {value} = target // no inputs de chackbox o target não tem value.
        setInputs({
            ...inputs,
            [name]: value
        })
    }

    const handleSubmit =(event) =>{
        event.preventDefault()  //previni o comportamento padrão de refresh na página.
        props.addCard(inputs)
    } 

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="image">Endereço da imagem da Carta</label>
                <input type="text" id="image" name="image" onChange={handleInputChange} value={inputs.image}/>
            </div>
            <div>
                <label htmlFor="value">Nome da Carta</label>
                <input type="text" id="value" name="value" onChange={handleInputChange} value={inputs.value}/>
            </div>
            <div>
                <label htmlFor="suit">Naipe da Carta</label>
                <input type="text" id="suit" name="suit" onChange={handleInputChange} value={inputs.suit}/>
            </div>
            <input type="submit"/>
        </form>
        </>
    )
}

export default Form