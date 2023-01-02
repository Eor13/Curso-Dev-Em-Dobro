
import './App.css';
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';
import { ThemeProvider } from './contexts/theme-context';
import {Card} from './components/card/card'

function App() {
  return (
    //Passo 6 - dentro do "ThemeProvider" será colocado os componentes que usarão o contexto
    //ele engloba todos componentes dentro dele, assim teremos acesso aos dados do context.
    <ThemeProvider>
       <ThemeTogglerButton/>
       <Card/>
       <Card/>
       <Card/>
    </ThemeProvider>
  );
}

export default App;
