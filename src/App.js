import React, { useState } from "react";

const App = () => {
  const [dictionary, setDictionary] = useState([
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);

  // State for user input and search result
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState("Definition: "); // Initial stage text

  // Function to handle search
  const handleSearch = () => {
    const lowercaseTerm = searchTerm.toLowerCase();
    const foundWord = dictionary.find((entry) => entry.word.toLowerCase() === lowercaseTerm);

    if (searchTerm.trim() === "") {
      setSearchResult("Definition: Please enter a search term.");
    } else if (foundWord) {
      setSearchResult(`Definition: ${foundWord.meaning}`);
    } else {
      setSearchResult("Definition: Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <label>
        Search for a word:
        <input
          type="text"
          placeholder="Enter a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>
      <p>{searchResult}</p>
    </div>
  );
};
export default App;
