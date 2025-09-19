console.log("ლომიიიიი");

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    console.log("დავამთავრე დათოვ");
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData();