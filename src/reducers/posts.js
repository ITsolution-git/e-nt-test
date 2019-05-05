import {
} from "../config/type.js";
const comment = {
  id: 0,
  author: {
    avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg',
    name: 'Jerome Gaveau',
  },

  content: 'Color is so powerful that it can persuade, motivate, inspire and touch people’s soft spot',
  createdAt: new Date()
}

const post = {
  id: 0,
  author: {
    avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg',
    name: 'Jerome Gaveau',

  },
  commentCount: 1394,
  favCount: 302,

  content: 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. ',
  image: 'https://img1.southernliving.timeinc.net/sites/default/files/styles/portrait_2_3/public/image/2018/03/main/redbud_tree.jpg',

  createdAt: new Date(),

  comments: [{
    ...comment
  }, {
    ...comment,
    id: 1

  }]
}
const intialState = {
  posts: [{
    ...post
  },{
    ...post,
    id: 1
  },{
    ...post,
    id: 2
  },{
    ...post,
    id: 3
  }],
  post: post
};

export default function(state = intialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}
