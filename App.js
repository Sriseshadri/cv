import './App.css';
import Axios from 'axios';
import { useState } from 'react';
function App() {
  const[data , setData] = useState([])
  const getNews = () => {
    Axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=15cc1033183c4405957f076780b9976c&q=india")
    .then((response) => {
      console.log(response);
      setData(response.data.articles)
    })
  }
  return (
  <> 
  <div>
  <button className='App' onClick={getNews}>GET NEWS</button>
  </div>
  <div className='container '>
    <div className='row'>
    { data.map((value) => {
      return(
      <div className="card" >
        <img src={value.urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
         <h5 className="card-title">{value.title}</h5>
         <p className="card-text">{value.description}</p>
         <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      )
    })
    }
    </div>
  </div>
  </>
  );
}
export default App;
