

let university = {
    name: "Georgian Technical University",
    departments: 8,
    website: "www.geotu.ge",
    ratings: {
        student1: 95,
        student2: 87,
        student3: 92
    }
};

console.log(university);
console.log(university.hasOwnProperty("scholarship"));
university = Object.assign(university, { studentsCount: 15000 });
Object.freeze(university);
university.name = "TSU";
console.log(Object.isFrozen(university));


let sportsClub = {
    clubName: "Dinamo Tbilisi",
    sportType: "Football",
    foundedYear: 1925,
    achievements: {
        title1: "Georgian League",
        title2: "Georgian Cup",
        title3: "UEFA Cup Winners Cup"
    }
};

console.log(Object.keys(sportsClub));
console.log(Object.values(sportsClub));
console.log(sportsClub.hasOwnProperty("sponsors"));
sportsClub = Object.assign(sportsClub, { stadiumCapacity: 54000 });
Object.freeze(sportsClub);
sportsClub.clubName = "Locomotive";
console.log(Object.isFrozen(sportsClub));


let hotel = {
    hotelName: "Rooms Hotel",
    stars: 4,
    location: "Kazbegi",
    guestReviews: {
        guest1: 4.5,
        guest2: 4.8,
        guest3: 4.7
    }
};

console.log(hotel);
console.log(hotel.hasOwnProperty("spa"));
hotel = Object.assign(hotel, { roomsCount: 156 });
Object.freeze(hotel);
hotel.stars = 5;
console.log(Object.isFrozen(hotel));


let cinema = {
    cinemaName: "Cavea",
    moviesCount: 12,
    location: "Tbilisi Mall",
    movieReviews: {
        user1: 8.5,
        user2: 7.9,
        user3: 8.2
    }
};

console.log(cinema);
console.log(cinema.hasOwnProperty("vipSeats"));
cinema = Object.assign(cinema, { ticketPrice: 15 });
Object.freeze(cinema);
cinema.moviesCount = 15;
console.log(Object.isFrozen(cinema));
