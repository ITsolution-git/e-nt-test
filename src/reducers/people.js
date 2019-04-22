import {
} from "../config/type.js";
const person = {
  id: 0,
  avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg',
  name: 'Jerome Gaveau',

  following: true,

  bio: 'Simplifying interfaces and experiences since 2012.  🎉 Feel free to contact me for full-time or freelance work opportunities.',

  title: 'UI/UX Designer',
  username: 'niculici.victor',
  email: 'niculici.victor@gmail.com',
  location: 'Bucharest, Romania',
  
  level: 0,
  point: 33,
  followerCount: 10,

  tags: ['UI Design', 'UI Design'],
}

const intialState = {
  people: [{
    ...person
  },{
    ...person,
    id: 1
  },{
    ...person,
    id: 2
  },{
    ...person,
    id: 3
  }],
  person: person
};

export default function(state = intialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}
