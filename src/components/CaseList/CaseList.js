import React from 'react';
export default function CaseList({ caselist }) {
  // console.log(courts);
  return (
    <div>
      <div>
        <h1>Case List</h1>
        {caselist &&
          caselist.map((item) => {
            return (
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#d6d6d6',
                  border: '1px Solid #202020',
                }}
              >
                {item.fields['CRN Number']}
              </div>
            );
          })}
      </div>
    </div>
  );
}
