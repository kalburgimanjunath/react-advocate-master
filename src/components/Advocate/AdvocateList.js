import React from 'react';
export default function AdvocateList({ advocates }) {
  // console.log(advocates);
  return (
    <div>
      <div>
        <h1>Advocates</h1>
        {advocates &&
          advocates.map((item) => {
            return (
              <div
                style={{
                  padding: '20px',
                  backgroundColor: '#d6d6d6',
                  border: '1px Solid #202020',
                }}
              >
                <i class="fas fa-user"></i> {item.fields.FirstName}
              </div>
            );
          })}
      </div>
    </div>
  );
}
