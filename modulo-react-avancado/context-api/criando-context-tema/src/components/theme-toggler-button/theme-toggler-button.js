import React, { useContext } from "react"
import { ThemeContext, themes } from "../../contexts/theme-context"
import { Button } from "../button/button"
//Passo 7 - cria o componente 'ThemeTogglerButton' com uma constante 'themes' com um Hook "useContext()" 
 export const ThemeTogglerButton = () =>{
    const {theme, setTheme} = useContext(ThemeContext)
        // Passo 11 - aplica o onClick de verificação com interpolação
    return(
        <div>
            <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}> Clique aqui</Button>
        </div>
    )    
 }