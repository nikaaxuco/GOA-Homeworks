// React ბიბლიოთეკის იმპორტი (საჭიროა JSX-ისა და კომპონენტების გამოყენებისთვის)
import React from 'react';

// react-dom/client მოდულიდან createRoot ფუნქციის იმპორტი

import { createRoot } from 'react-dom/client';

// HTML ფაილში ვპოულობთ ელემენტს, რომელსაც აქვს id="app"
// ეს იქნება ადგილი, სადაც React ჩასვავს თავის კონტენტს
const container = document.getElementById('app');

// ვქმნით "root" ობიექტს createRoot ფუნქციით —
// ეს root აკონტროლებს React კომპონენტების რენდერს ჩვენს container-ში
const root = createRoot(container);

// root.render() მეთოდით ვაკეთებტ JSX სტრუქტურის ჩასმას DOM-ში
root.render(
  // JSX სტრუქტურა HTML-ის მსგავსი სინტაქსი React-ში
  <div>

    <h1>Hello World!</h1>


    <button> Click Me tu ginda rom bedniereba gewvios </button>

    <p>Zdarova brat</p>

  </div>


);
