import React, {useContext} from 'react'
import { ThemeContext } from '../../contexts/theme-context'

export const Card = () => {
    const {theme} = useContext(ThemeContext)
    console.log("theme card", theme)
    // Passo 1 - aplicar a estilização com "styled" no Card
    return(
        <div style={{color:theme.color, backgroundColor: theme.background}}>
            <h1>Título do Card</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptatibus, maxime quidem error unde iste facere tempore expedita itaque est suscipit repellendus rerum magni fugiat veniam necessitatibus nemo placeat debitis.</p>
        </div>
    )
}