/*-----SetTimeout------*/

// setTimeout(() => {
//     alert(`Olá mundo!`)
//     console.log('Console dentro do SetTimeout')
// }, 2000);

// console.log('Console depois do SetTimeout');

const id = setTimeout(function(){
                        console.log('Executando a cada 2 segundos')
                    }, 2000);

console.log(id);
clearTimeout(id)
    
/*-----SetInterval------*/
// setInterval(function(){
//     console.log(`Executando a cada 2 segundos.`)
// }, 2000);


const idDoIntervalo = setInterval(() =>{
                        console.log('Executando a cada 2 segundos')
                    }, 2000);

console.log(idDoIntervalo);
clearInterval(idDoIntervalo);
