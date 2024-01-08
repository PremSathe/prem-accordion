
import React from 'react'
import "./style.css"

const AccordionItem = ({question, answer, selected, setSelected, i}) => {
  return (
    <div className="item">
    <div className="title" onClick={() => setSelected(i)}>
      <h2>{question}</h2>
      <span>{selected === i ? "-" : "+"}</span>
    </div>
    <div className={selected === i ? "content show" : "content"}>
      {answer}
    </div>
  </div>
  )
}

export default AccordionItem;