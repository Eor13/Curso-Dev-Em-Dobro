import { useState, useEffect } from "react"
import Form from "../../components/forms/form"

async function createDeck() {
  const response = await fetch(
    "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
  )
  const deck = await response.json()
  return deck.deck_id
}

async function getCards(deck_id) {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`
  )
  return await response.json()
}

const CardList = (props) => {
  return (
    <ul>
      {
        props.cards.map((card, index) => {
          return (
            <li key={index}>
              <img src={card.image} alt={card.value} />
              <p>{card.value} {card.suit}</p>
            </li>
          )
        })
      }
    </ul>
  )
}

const DeckOfCard = () => {
  const [deck, setDeck] = useState({
    cards: [],
  })

  useEffect(() => {
    const fetchData = async () => {
      const deckId = await createDeck()
      const data = await getCards(deckId)

      setDeck({
        cards: data.cards,
      })
    }
    fetchData()

  }, [])

  const addCard =(newCard) =>{
    console.log(newCard)
    setDeck({
      cards: [...deck.cards, newCard] //usa o sprad para pegar o o array antigo + a nova carta
    })
  }

  return (
    <section>
      <Form addCard={addCard}/>
      {deck.cards.length > 0 ? <CardList cards={deck.cards}/> : "Nenhuma carta encontrada"}
    </section>
  )
}

export default DeckOfCard
