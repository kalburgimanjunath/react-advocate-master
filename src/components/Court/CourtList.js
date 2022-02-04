import React from 'react';
export default function CourtList({ courts }) {
  // console.log(courts);
  return (
    <div>
      <div>
        <h1>Court List</h1>
        {courts &&
          courts.map((item) => {
            return (
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#d6d6d6',
                  border: '1px Solid #202020',
                }}
              >
                <i class="fas fa-flag-alt"></i> {item.fields.Name}
              </div>
            );
          })}
      </div>
    </div>
  );
}
