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
    id: 1,

    author: {
      avatar: 'http://keenthemes.com/preview/metronic/theme/assets/pages/img/avatars/team1.jpg',
      name: 'Alex Martin',
    },
    content: 'Beleive you can you are half way there.',
    image: 'https://static1.squarespace.com/static/55a61857e4b03cf5434986b3/t/561f0be5e4b0471729678598/1444875245782/',
    commentCount: 33244,
    favCount: 32334,
  },{
    ...post,
    id: 2,

    author: {
      avatar: 'https://technext.github.io/Metronic-One-Page/theme/assets/onepage/img/people/img7-large.jpg',
      name: 'Sandra Smith',
    },
    content: 'We ❤️ supporting other entrepreneur\'s events',
    image: 'https://pbs.twimg.com/media/D6jmG6TX4AMD_nk.jpg',
    commentCount: 3,
    favCount: 3,
  },{
    ...post,
    id: 3,

    author: {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-X6AUoJkxsxSfnReHc_K_BCxu8rv6O8xUGgQfwoFovQ8xA9l',
      name: 'Mike Pollack',
    },
    content: 'Don\'t have regrets like this when you get older - live each day to the fullest ',
    image: 'https://pbs.twimg.com/media/D6t5SDoWkA0ytdU.png',
    commentCount: 2,
    favCount: 33,
  },{
    ...post,
    id: 4,

    author: {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-X6AUoJkxsxSfnReHc_K_BCxu8rv6O8xUGgQfwoFovQ8xA9l',
      name: 'Mike Pollack',
    },
    content: 'Never be afraid to ask for help 💪What advice would you give to your fellow entrepreneurs? Comment below! 👇',
    image: 'https://pbs.twimg.com/media/D6ecf2XXsAAYye9.png',
    commentCount: 2,
    favCount: 33,
  },{
    ...post,
    id: 5,

    author: {
      avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg',
      name: 'Jerome Gaveau',
    },
    content: 'Sometimes equity is more important than equality 🙌',
    image: 'https://pbs.twimg.com/media/D6SbcXYXsAAyEV9.jpg',
    commentCount: 2,
    favCount: 33,
  },{
    ...post,
    id: 6,

    author: {
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC-X6AUoJkxsxSfnReHc_K_BCxu8rv6O8xUGgQfwoFovQ8xA9l',
      name: 'Mike Pollack',
    },
    content: 'Anyone can start a successful business with the right inspiration and knowledge 📈',
    image: 'https://pbs.twimg.com/media/D6O_xgNX4AAILNe.png',
    commentCount: 2,
    favCount: 33,
  },{
    ...post,
    id: 7,

    author: {
      avatar: 'https://technext.github.io/Metronic-One-Page/theme/assets/onepage/img/people/img7-large.jpg',
      name: 'Sandra Smith',
    },
    content: '"The single greatest \'people skill\' is a highly developed & authentic interest in the *other* person" - Bob Burg',
    image: 'https://pbs.twimg.com/media/D6Esfm1WkAEssPZ.jpg',
    commentCount: 2,
    favCount: 33,
  },{
    ...post,
    id: 8,

    author: {
      avatar: 'http://keenthemes.com/preview/metronic/theme/assets/pages/img/avatars/team1.jpg',
      name: 'Alex Martin',
    },
    content: 'Check out what the co-founder of Google has to say about building a successful business! 💪',
    image: 'https://pbs.twimg.com/media/D5_jA6RWAAAzpNX.png',
    commentCount: 2,
    favCount: 33,
  }],
  post: post
};

export default function(state = intialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}
