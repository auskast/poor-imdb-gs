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
  },
  {
    id: 11,
    name: "Paul Rudd",
    fullName: "Paul Stephen Rudd",
    birthDate: "1969-04-06",
    birthPlace: "Passaic, New Jersey, USA",
    filmography: [
      {
        id: 1,
        title: "Captain America: Civil War",
        year: 2016,
        roles: [ "Scott Lang", "Ant-Man" ]
      },
      {
        id: 2,
        title: "Ant-Man",
        year: 2015,
        roles: [ "Scott Lang", "Ant-Man" ]
      },
      {
        id: 9,
        title: "Anchorman 2: The Legend Continues",
        year: 2013,
        roles: [ "Brian Fantana" ]
      },
      {
        id: 10,
        title: "This Is the End",
        year: 2013,
        roles: [ "Paul Rudd" ]
      },
      {
        id: 9,
        title: "Anchorman 2: The Legend Continues",
        year: 2013,
        roles: [ "Brian Fantana" ]
      },
      {
        id: 10,
        title: "Wanderlust",
        year: 2012,
        roles: [ "George Gergenblatt" ]
      },
      {
        id: 11,
        title: "Role Models",
        year: 2008,
        roles: [ "Danny" ]
      },
      {
        id: 12,
        title: "Forgetting Sarah Marshall",
        year: 2008,
        roles: [ "Chuck" ]
      },
    ]
  }
];

export function getActor (id) {
  return actors.find((actor) => actor.id === id);
}

export default actors;
