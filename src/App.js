import React,{useEffect, useState} from 'react';
import EmojiData from './emoji.json';
import Footer from './footer' ;

const App = () => {
  const [search,setSearch] = useState("");
  const [data,setData] = useState([]);

  useEffect(()=>{
      const newData = EmojiData.filter(emoji => emoji.title.toLowerCase().includes(search.toLowerCase()));
      setData(newData);
  },[search])
 
  return (
    <div>
      <center>
        <h1> EMOJI SEARCH </h1>
        <input size="30" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </center>
        {data.map(emoji =>
          <div className="card" key={emoji.title}>
          <div className="card-body" onClick={() => {navigator.clipboard.writeText(emoji.symbol);alert("Emoji Copied")}} >
            {emoji.symbol} {emoji.title}
          </div>
          
        </div>
        )}
      <Footer />
    </div>
  )
}

export default App