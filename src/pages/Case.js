import React from 'react';
import RichEditor from '../components/RichEditor';
import { Sidebar } from '../components/index';
export default function Case() {
  return (
    <div className="row">
      <div className="col-4">
        <h1>Party Name</h1>
        <h3>Registration Number</h3>
        <h5>Section 125</h5>
        <div className="row">
          <a href="">New</a>
          <Sidebar />
        </div>
      </div>
      <div className="col-8">
        <div id="container" />
        <RichEditor />
      </div>
    </div>
  );
}
