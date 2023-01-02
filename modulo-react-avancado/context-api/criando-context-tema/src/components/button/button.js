import React,  { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const Button = (props) => {
    //Passo 9 - passar o context de constante 'themes' com um Hook "useContext()" aqui também
    const {theme} = useContext(ThemeContext)

    console.log('button theme', theme)

    //Passo 8- Cria um botão generico com expred operator

    // Passo 12 - aplicar a estilização com "styled"
    return(
        <button {...props} 
        style= {{color: theme.color, backgroundColor:theme.background}}
        />
    )
}