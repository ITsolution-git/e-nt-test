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
    id: 1,

    avatar: 'https://technext.github.io/Metronic-One-Page/theme/assets/onepage/img/people/img7-large.jpg',
    name: 'Sandra Smith',
  },{
    ...person,
    id: 2,

    avatar: 'http://keenthemes.com/preview/metronic/theme/assets/pages/img/avatars/team1.jpg',
    name: 'Alex Martin',
  },{
    ...person,
    id: 3,

    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-X6AUoJkxsxSfnReHc_K_BCxu8rv6O8xUGgQfwoFovQ8xA9l',
    name: 'Mike Pollack',
  }],
  person: person
};

export default function(state = intialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}
