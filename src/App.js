import React, { useEffect, useState } from 'react';
import './style.css';
import {
  AdvocateList,
  CourtList,
  ClientList,
  CaseList,
  Menu,
} from './components/index';
const YOUR_API_KEY = 'keyeNXyxxuuYJY19w';
import axios from 'axios';
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

      setData({ advocates, courts, caselist });
    })();
  }, []);
  console.log(data);

  return (
    <div>
      <i class="bi-alarm"></i>
      <Menu />
      <i class="fas fa-user"></i>
      {data ? (
        <div>
          <AdvocateList advocates={data.advocates.data.records} />
        </div>
      ) : (
        <div>'no records found'</div>
      )}

      {data ? (
        <div>
          <CourtList courts={data.courts.data.records} />
        </div>
      ) : (
        <div>'no records found'</div>
      )}

      {data ? (
        <div>
          <CaseList caselist={data.caselist.data.records} />
        </div>
      ) : (
        <div>'no records found'</div>
      )}
    </div>
  );
}
