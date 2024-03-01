
import { useState } from 'react';
import './App.css';

function App() {

  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example",
  };
  const [text,setText] = useState({
    searchText:'',
    suggestedText:''
  });

  function handleChange(e){
    let txt=e.target.value
    setText({searchText:txt})

    let words=txt.split(' ');
    let correctWords=words.map((word) =>
    {
      const correctedWord=customDictionary[word.toLowerCase()];
      return correctedWord || word
    }
   
    )
    //words=correctWords.join('');

    let firstCorrectWord=correctWords.find((val,indx) => val !== words[indx])

setText({suggestedText:firstCorrectWord || ''})

  }
  return (
    <div className="App">
      <h2>Spell check and Auto-Correction</h2>
      <textarea type="text" onChange={handleChange} value={text.searchText} placeholder="Enter text..."></textarea>
      {text.suggestedText ?<p>Did you mean: {text.suggestedText }?</p>:<></>}
   


    </div>
  );
}

export default App;
