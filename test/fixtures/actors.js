const actors = [
  {
    id: 1,
    name: "Chris Evans",
    fullName: "Christopher Robert Evans",
    birthDate: "1981-06-13",
    birthPlace: "Boston, Massachusetts, USA",
    filmography: [
      {
        id: 1,
        title: "Captain America: Civil War",
        year: 2016,
        roles: [ "Steve Rogers", "Captain America" ]
      },
      {
        id: 2,
        title: "Ant-Man",
        year: 2015,
        roles: [ "Steve Rogers", "Captain America" ]
      },
      {
        id: 3,
        title: "Avengers: Age of Ultron",
        year: 2015,
        roles: [ "Steve Rogers", "Captain America" ]
      },
      {
        id: 4,
        title: "Captain America: Civil War",
        year: 2016,
        roles: [ "Steve Rogers", "Captain America" ]
      },
      {
        id: 5,
        title: "Captain America: Winter Soldier",
        year: 2014,
        roles: [ "Steve Rogers", "Captain America" ]
      },
      {
        id: 6,
        title: "The Avengers",
        year: 2012,
        roles: [ "Steve Rogers", "Captain America" ]
      },
      {
        id: 7,
        title: "Captain America: The First Avenger",
        year: 2011,
        roles: [ "Steve Rogers", "Captain America" ]
      },
      {
        id: 8,
        title: "Scott Pilgrim vs. the World",
        year: 2010,
        roles: [ "Lucas Lee" ]
      },
    ]
  }
];

export function getActor (id) {
  return actors.find((actor) => actor.id === id);
}

export default actors;
