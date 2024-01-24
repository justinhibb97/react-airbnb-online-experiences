import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import cardData from "./data"

export default function App() {
  const cardElements = cardData.map(card => {
    return (
      <Card
        key={card.id}
        {...card}
      />
    )
  })
  return (
    <div className="container">
      <Navbar />
      <Hero/>
      <section className="cards-list">
        {cardElements}
      </section>
    </div>
  )
}
