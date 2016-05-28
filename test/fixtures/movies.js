const movies = [
  {
    id: 1,
    title: "Captain America: Civil War",
    year: 2016,
    description: "Political interference in the Avengers' activities causes a rift between former allies Captain America and Iron Man.",
    directors: [ "Anthony Russo", "Joe Russo" ],
    genres: [ "Action", "Adventure", "Sci-Fi" ],
    rating: "PG-13",
    runtime: 147,
    cast: [
      {
        id: 1,
        name: "Chris Evans",
        roles: [ "Steve Rogers", "Captain America" ]
      },
      {
        id: 2,
        name: "Robert Downey Jr.",
        roles: [ "Tony Stark", "Iron Man" ]
      },
      {
        id: 3,
        name: "Scarlett Johansson",
        roles: [ "Natasha Romanoff", "Black Widow" ]
      },
      {
        id: 4,
        name: "Sebastian Stan",
        roles: [ "Bucky Barnes", "Winter Soldier" ]
      },
      {
        id: 5,
        name: "Anthony Mackie",
        roles: [ "Sam Wilson", "Falcon" ]
      },
      {
        id: 6,
        name: "Don Cheadle",
        roles: [ "Lieutenant James Rhodes", "War Machine" ]
      },
      {
        id: 7,
        name: "Jeremy Renner",
        roles: [ "Clint Barton", "Hawkeye" ]
      },
      {
        id: 8,
        name: "Chadwick Boseman",
        roles: [ "T'Challa", "Black Panther" ]
      },
      {
        id: 9,
        name: "Paul Bettany",
        roles: [ "Vision" ]
      },
      {
        id: 10,
        name: "Elizabeth Olsen",
        roles: [ "Wanda Maximoff", "Scarlet Witch" ]
      },
      {
        id: 11,
        name: "Paul Rudd",
        roles: [ "Scott Lang", "Ant Man" ]
      },
      {
        id: 12,
        name: "Emily VanCamp",
        roles: [ "Sharon Carter" ]
      },
      {
        id: 13,
        name: "Tom Holland",
        roles: [ "Peter Parker", "Spider-Man" ]
      },
      {
        id: 14,
        name: "Daniel Brühl",
        roles: [ "Zemo" ]
      },
      {
        id: 15,
        name: "Frank Grillo",
        roles: [ "Brock Rumlow", "Crossbones" ]
      },
    ],
  }
];

export function getMovie (id) {
  return movies.find((movie) => movie.id === id);
}

export default movies;
