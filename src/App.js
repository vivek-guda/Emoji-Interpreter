import { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
};

const emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  const emojiInputHandler = (e) => {
    const userInput = e.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We dont have this in our database";
    }

    setMeaning(meaning);
  };

  const emojiClickHandler = (emoji) => {
    setMeaning(emojiDictionary[emoji]);
  };

  return (
    <div className="App">
      <h1 class="heading">inside out</h1>
      <input
        onChange={emojiInputHandler}
        placeholder="Enter an emoji to know its meaning"
      />
      <h3>{meaning}</h3>
      <h3> Emojis we know </h3>
      {emojisWeKnow.map((emoji) => {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
