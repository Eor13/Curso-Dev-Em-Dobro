const root = document.getElementById('root')

const p = React.createElement('p', null, 'Olá Mundo! Estou no móduo de React!!!!')
                           // (tag, atributos, valor/texto ) 
ReactDOM.render(p, root)
// DOM.render irá renderizar no HTML o código.