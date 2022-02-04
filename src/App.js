import React from 'react';
import './style.css';
import { AdvocateList, CourtList, ClientList } from './components/index';
export default function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <AdvocateList />
      <CourtList />
      <ClientList />
    </div>
  );
}
