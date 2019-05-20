import {
} from "../config/type.js";

const message = {
  id: 0,
  user: {
    avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg',
    name: 'Peter'
  },

  content: 'Hey, what are you doing'
}

const intialState = {
  messages: [{
    ...message,
    unread: true
  },{
    ...message,
    id: 1,
    user: {
      avatar: 'http://keenthemes.com/preview/metronic/theme/assets/pages/img/avatars/team1.jpg',
      name: 'Alex'
    },

    content: 'I would love to take this trip with'
  },{
    ...message,
    id: 2,
    user: {
      avatar: 'https://technext.github.io/Metronic-One-Page/theme/assets/onepage/img/people/img7-large.jpg',
      name: 'Sandra'
    },

    content: 'Hey, what are you doing'
  },{
    ...message,
    id: 3,
    user: {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-X6AUoJkxsxSfnReHc_K_BCxu8rv6O8xUGgQfwoFovQ8xA9l',
      name: 'Mike'
    },

    content: 'Hey, it was amazing experience'
  }],
};

export default function(state = intialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}
