import React from 'react';
export default function ClientList({ clients }) {
  // console.log(courts);
  return (
    <div>
      <div>
        <h1>Court List</h1>
        {clients &&
          clients.map((item) => {
            return (
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#d6d6d6',
                  border: '1px Solid #202020',
                }}
              >
                {item.fields.Name}
              </div>
            );
          })}
      </div>
    </div>
  );
}
