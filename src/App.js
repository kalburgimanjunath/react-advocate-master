import React,{useEffect,useState} from 'react';
import './style.css';
import { AdvocateList, CourtList, ClientList } from './components/index';
const YOUR_API_KEY = "keyeNXyxxuuYJY19w";
export default function App() {
  const movies = useState([])
  useEffect(){
    fetch(`https://api.airtable.com/v0/app5F4nbMoQ4mxv4N/Advocates?api_key=${YOUR_API_KEY}`)
    .then((resp) => resp.json())
    .then(data => {
       this.setState({ movies: data.records });
    }).catch(err => {
      // Error :(
    });
  }
  console.log(movies)

  return (
    <div>
      <h1>Hello world</h1>
      <AdvocateList />
      <CourtList />
      <ClientList />
    </div>
  );
}
