import {SearchImages} from './components/Api';
import {useState} from 'react';
import './App.css';
import { Search } from "react-bootstrap-icons";

function App() {
  const[query,setQuery]=useState()
  const[SearchQ,setSearch]=useState("Random")
  const[visible,setVisible]=useState(8)
  const search=()=>{
    setSearch(query)
    setVisible(8)
  }
  const SearchData=SearchImages(SearchQ)
  const showMore=()=>{
    setVisible(prevItems=>prevItems+8)
    }
  return (
    <div className="App">
      <div className="c">
      <div className="c1">
        <input className="search-input fontlink" type='text' onChange={(event)=>setQuery(event.target.value)} placeholder="Search for photos"/>
        <button onClick={search}><Search style={{marginRight:"50px",marginLeft:"50px", marginBottom:"5px",marginTop:"5px"}} size={25} /></button>
      </div>
      <div style={{marginLeft:"220px"}}>
        <p  className="fontlink" style={{fontSize:"30px",  marginBottom:"0px"}}><strong>{SearchQ}</strong></p>
      {SearchData.length === 0 ? (
          <p classs
          >{` Sorry ${SearchData.length} images has been found. Try another Keyword `}</p>
        ) : (
              <p>{`${SearchData.length} images has been found`}</p>
        )}
      </div>
      <div className="contain">
       {SearchData.slice(0,visible).map((img,key)=>(
          <img src={img.urls.thumb} alt="random" key={key}/>
        )) 
        }
      </div>
      {visible<SearchData.length?(
      <button   className="showmore" onClick={showMore} >Load more</button>
      ):(
        <span></span>
      )}
      <div style={{paddingBottom:"50px"}}></div>
      </div>
    </div>
  );
}

export default App;
