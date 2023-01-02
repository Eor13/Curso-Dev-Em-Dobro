// Passo 1 - Criar o criador de contexto
import { createContext, useState } from "react";
// Passo 2 - Um contexto de temas, cria uma array com a estilização do temas
export const themes = {
    light: {
        color: '#000',
        background: '#eee'
    },
    dark: {
        color: '#fff',
        background: '#000'
    }
}
export const ThemeContext = createContext({})

//Passo 3 - criar um context provider
export const ThemeProvider = (props) => {
    //Passo 10 - Passar os ESTADO atual da aplicação
    // Themes começará com tema light
    const [theme, setTheme] = useState(themes.light)

    return( 
        // Passo 5 - retorna um elemento ThemContext que recebe o provider

        //value é a propriedade de valor que poderá ser propagado pelo "props.children"

        // Passo 10 - Setar o theme e setTheme do "Provider" para os componentes filhos usando o "value"
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}