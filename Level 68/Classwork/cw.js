  let academy = {
      name: "Goal oriented Academy",
      courses: ["Web Development", "Game development", "Graphic design"],
      socialLink: "www.goacademy.ge",
      reviews: {
          user1: {
              name: "Giorgi",
              status: "parent",
              review: "great learning enviroment"
          },
          user2: {
              name: "Ana",
              status: "child",
              review: "excellent teachers"
          },
          user3: {
              name: "Daviti",
              status: "parent",
              review: "online learning is very good"
          }
      }
  };

  console.log(Object.entries(academy));

  console.log(Object.keys(academy));

  console.log(Object.values(academy));

  console.log(academy.hasOwn('name'));

  let newObject = {
      member: "Premium"
  };

  let mergedObject = Object.assign({}, academy, newObject);
  console.log(mergedObject);

  Object.freeze(academy);

  console.log(Object.isFrozen(academy));


