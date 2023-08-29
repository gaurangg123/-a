import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Axios from 'axios';
function App() {
  const [data, setData] = useState([])
  const getData = () => {
    Axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=de76e7cdc7f746d898982e7782964c2d&q=india")
    .then((response) => {
      console.log(response)
      setData(response.data.articles)
    })
  }
  return (
    <>
    <div>
      <button className='btn btn-secondary' onClick={getData}>Get News</button>
    </div>
    <div className='container'>
      <div className='row'>
        { data.map((value) => {
          return(
            <div className="card" style={{width:"18rem"}}>
        <img src={value.urlToImage} className="card-img-top" alt="..."/>
        <div className="card-body">
        <h5 className="card-title">{value.title}</h5>
        <p className="card-text">{value.description}</p>
        <a href={value.url}> <button className="btn btn-primary" >Go somewhere</button></a>
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
 
