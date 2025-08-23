
function number(busStops) {
  return busStops.reduce((people, [on, off]) => people + on - off, 0);
}


console.log(number([[10,0],[3,5],[5,8]]));
