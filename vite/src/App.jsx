import React from 'react';

export default function App() {

  return (
    <div>
      <div>


        <p>ეს არის პირველი პარაგრაფი</p>
        <p>ეს არის მეორე პარაგრაფი</p>


        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', margin: '18px 0' }}>
          <div>
            <img src="https://picsum.photos/seed/pic1/600/360" alt="Picture 1" style={{ width: '100%', borderRadius: '8px' }} />

            <figcaption>სურათი 1</figcaption>
          </div>
          <div>

            <img src="https://picsum.photos/seed/pic2/600/360" alt="Picture 2" style={{ width: '100%', borderRadius: '8px' }} />
            <figcaption>სურათი 2</figcaption>

          </div>
          <div>
            <img src="https://picsum.photos/seed/pic3/600/360" alt="Picture 3" style={{ width: '100%', borderRadius: '8px' }} />
            <figcaption>სურათი 3</figcaption>
          </div>
        </div>


        <p>
          გადასვლა: <a href="https://youtube.com">youtube.com</a>
        </p>
      </div>
    </div>
  );
}

