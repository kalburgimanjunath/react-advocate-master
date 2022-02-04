import React, { useState, useEffect } from 'react';
import {
  Calender,
  AdvocateList,
  CourtList,
  CaseList,
} from '../components/index';
export default function Main({ data }) {
  return (
    <div>
      <h1>Main Page</h1>
      <div className="row">
        {data ? (
          <div className="col-3">
            <AdvocateList advocates={data.advocates.data.records} />
          </div>
        ) : (
          <div>'no records found'</div>
        )}

        {data ? (
          <div className="col-3">
            <CourtList courts={data.courts.data.records} />
          </div>
        ) : (
          <div>'no records found'</div>
        )}

        {data ? (
          <div className="col-3">
            <CaseList caselist={data.caselist.data.records} />
          </div>
        ) : (
          <div>'no records found'</div>
        )}
        <div className="col-3">
          <Calender />
        </div>
      </div>
    </div>
  );
}
