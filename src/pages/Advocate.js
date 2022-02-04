import React from 'react';
import { AdvocateList } from '../components/index';
export default function Advocates(data) {
  return (
    <div>
      <div>
        <h1>Advocates</h1>
      </div>
      {data ? (
        <div>
          <AdvocateList advocates={data.advocates.data.records} />
        </div>
      ) : (
        <div>'no records found'</div>
      )}
    </div>
  );
}
