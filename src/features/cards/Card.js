import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { selectCards } from "./cardsSlice";

export default function Card({ id }) {
  const cards = useSelector(selectCards);
  const card = cards[id]; // replace this with a call to your selector to get a card by id
  console.log("Cards state:", cards);
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
