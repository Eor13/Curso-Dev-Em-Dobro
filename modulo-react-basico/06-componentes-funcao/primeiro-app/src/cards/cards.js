import Card from '../card/card.js'
const cardsTitle =['Titulo Card 1', 'Titulo Card 2', 'Titulo Card 3']

const showCardColor = (color) =>{
  console.log(color)
}

const Cards = () => {
  return (
    <div>
      <h1> Meus Cards</h1>
      <div>
        {
          cardsTitle.map((cardTitle,index) =>{
              return (
                <Card key={index} showCardColor={showCardColor}>
                  <h3>{cardTitle}</h3>
                <p>Esse é o texto do Card.</p>
                </Card>
              )
          })
        }

        <Card color='blue' showCardColor={showCardColor}>
          <h3>Card de Fundo Azul</h3>
          <p>Esse é o texto do Card.</p>
        </Card>

        {/* <Card>
          <h1>Título Card 1</h1>
          <p>Esse é o texto do Card.</p>
        </Card>
        <Card>
          <h1>Título Card 2</h1>
          <p>Esse é o texto do Card.</p>
          <button>Não clique aqui</button>
        </Card>
        <Card>
          <h1>Título Card </h1>
          <p>Esse é o texto do Card.</p>
          <input typeof="Number" maxLength={6}></input>
        </Card> */}
      </div>
    </div>
  );
};

export default Cards;