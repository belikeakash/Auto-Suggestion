import { useState } from "react";
import { data } from "./data";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [timeoutVariable, setTimeoutVariable] = useState();
  const [suggestionList, setSuggestionList] = useState([]);
  const inputChange = (e) => {
    setInput(e.target.value);
    const c = e.target.value;
    clearTimeout(timeoutVariable);
    setTimeoutVariable();
    if (c === "") {
      setSuggestionList([]);
    } else {
      let timer = setTimeout(() => {
        const list = data.filter((word) => {
          if (word.toLowerCase().includes(c.toLowerCase())) return word;
          return "";
        });
        setSuggestionList(list);
      }, 1000);
      setTimeoutVariable(timer);
    }
  };
  const AddsuggestedData = (data) => {
    setInput(data);
    setSuggestionList([]);
  };
  return (
    <div className="">
      <input
        type="search"
        value={input}
        onChange={(e) => inputChange(e)}
        placeholder={"Search... 🔍"}
      />
      {suggestionList.map((suggestionData, index) => {
        return (
          <div
            key={index}
            className=""
            onClick={() => {
              AddsuggestedData(suggestionData);
            }}
          >
            {suggestionData}
          </div>
        );
      })}
    </div>
  );
}
