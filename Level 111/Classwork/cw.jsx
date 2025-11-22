import React from 'react';

export default function App() {
  const buttonTexts = {
    one: 'გილოცავთ — პირველი ღილაკი',
    two: 'მეორე ღილაკი',
    three: 'მესამე ღილაკი'
  };

  const handleClick = (num) => {
    alert(`დაწკაპეთ ${num}-ე ღილაკი`);
  };

  return (
    <div style={{ fontFamily: 'system-ui', background: '#f6f7fb', color: '#111', minHeight: '100vh', padding: '24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <header>
          <h1>პირდაპირ Terminal-დან გაშვებული React ვებსაიტი</h1>
        </header>


        <div style={{ display: 'flex', gap: '12px', margin: '18px 0' }}>
          <button onClick={() => handleClick(1)}>{buttonTexts.one}</button>
          <button onClick={() => handleClick(2)}>{buttonTexts.two}</button>
          <button onClick={() => handleClick(3)}>{buttonTexts.three}</button>
        </div>


        <p>ეს არის პირველი პარაგრაფი — React კომპონენტიდან გამოტანილი ტექსტი.</p>
        <p>ეს არის მეორე პარაგრაფი — დინამიკური JSX შინაარსით.</p>


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
          გადასვლა: <a href="https://example.com" target="_blank" rel="noopener noreferrer">example.com</a>
        </p>
      </div>
    </div>
  );
}