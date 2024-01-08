import { useState } from "react";
import "./App.css";
import AccordionItem from "./components/AccordionItem";
import { data } from "./data";

function App() {
  const [selected, setSelected] = useState(0);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
      
          <AccordionItem key={i} i={i} {...item} selected={selected} setSelected={setSelected} />
        ))}
      </div>
    </div>
  );
}

export default App;
