import { useState } from "react";

type Link = {
  id: number,
  url?: string,
  text?: string
}

const navLinks = [
  {
    id: 1,
    url: "some url",
    text: "some text",
  },
  {
    id: 2,
    url: "some url",
    text: "some text",
  },
  {
    id: 3,
    url: "some url",
    // text: "some text",
  },
];

function Component() {
const [text, setText] = useState('shakeAndBake');
const [number, setNumber] = useState<number>(2);
const [list, setList] = useState<string[]>([]);
const [links, setLinks] = useState<Link[]>(navLinks);

  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>
      <button 
      className="btn btn-center" 
      onClick={() => {
        // setText(1)
        setNumber(2);
        setList(['hello', 'world']);
        setLinks([...links, {id:4, text: "dude"}]);
      }}>
        Click me
      </button>
      <h2>{number}</h2>
    </div>
  );
}
export default Component;
