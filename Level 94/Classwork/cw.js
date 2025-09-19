
function add(a, b) {

  return a + b;
}

function reverseText(text) {

  return text.split("").reverse().join("");
}





function wait(ms, label) {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(label);
    }, ms);
  });
}

async function loadIn2s() {

  const label = await wait(2000, "Done in 2s");
  return label;
}

async function loadIn1s() {

  const label = await wait(1000, "Done in 1s");
  return label;
}




console.log("Synchronous add(2, 3) =", add(2, 3));
console.log("Synchronous reverseText('hello') =", reverseText("hello"));

(async () => {
  console.log("Starting async tasks... (2s vs 1s)");


  const first = await Promise.race([loadIn2s(), loadIn1s()]);
  console.log("First finished:", first);
 
  


  const results = await Promise.all([loadIn2s(), loadIn1s()]);
  console.log("All finished (unordered array by start order):", results);


  const timedTask = (name, ms) => new Promise((resolve) => {
    const start = Date.now();
    console.log(`[${name}] started at`, new Date(start).toLocaleTimeString());
    setTimeout(() => {
      const end = Date.now();
      const took = end - start;
      console.log(`[${name}] finished after ~${took}ms`);
      resolve(name);
    }, ms);
  });

  await Promise.all([
    timedTask("Task-2s", 2000),
    timedTask("Task-1s", 1000),
  ]);

  console.log("Observation: Task-1s ყოველთვის სრულდება ადრე, რადგან მცირე ლოდინის დრო აქვს (1000ms < 2000ms). <3");
})();