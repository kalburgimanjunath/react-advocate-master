import React, { useEffect, useState } from 'react';
import './style.css';
import {
  AdvocateList,
  CourtList,
  ClientList,
  CaseList,
  Menu,
  Calender,
} from './components/index';
const YOUR_API_KEY = 'keyeNXyxxuuYJY19w';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { Main, Case } from './pages';
export default function App() {
  let [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const advocates = await axios.get(
        'https://api.airtable.com/v0/app5F4nbMoQ4mxv4N/Advocates?api_key=keyeNXyxxuuYJY19w'
      );
      const courts = await axios.get(
        'https://api.airtable.com/v0/app5F4nbMoQ4mxv4N/Courts?api_key=keyeNXyxxuuYJY19w'
      );
      const caselist = await axios.get(
        'https://api.airtable.com/v0/app5F4nbMoQ4mxv4N/Case List?api_key=keyeNXyxxuuYJY19w'
      );
      const documents = await axios.get(
        'https://api.airtable.com/v0/app5F4nbMoQ4mxv4N/Documents?api_key=keyeNXyxxuuYJY19w'
      );
      setData({ advocates, courts, caselist, documents });
    })();
  }, []);
  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <Menu />
      </div>
      <Routes>
        <Route path="/case" exact element={<Case />}></Route>
        <Route path="/*" exact element={<Main data={data} />}></Route>
      </Routes>
    </div>
  );
}
