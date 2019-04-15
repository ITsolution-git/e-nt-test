import {
} from "../config/type.js";
const post = {
  id: 0,
  author: {
    avatar: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwicnqjCjM7hAhVH1VkKHS3DClcQjRx6BAgBEAU&url=https%3A%2F%2Fmdbootstrap.com%2Fdocs%2Fjquery%2Fsections%2Ftestimonials%2F&psig=AOvVaw277kG9SwkxcrWYOnjaYL_4&ust=1555280234784928',
    name: 'Jerome Gaveau',

  },

  content: 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us. ',
  image: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiWwKPhjc7hAhUwwFkKHZNuCpcQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26ved%3D%26url%3Dhttps%253A%252F%252Fen.wikipedia.org%252Fwiki%252FTree%26psig%3DAOvVaw39xOsS5NMzwBSXmpvGz3Fp%26ust%3D1555280531425226&psig=AOvVaw39xOsS5NMzwBSXmpvGz3Fp&ust=1555280531425226',

  createdAt: new Date()
}
const intialState = {
  posts: [{
    ...post
  }]
};

export default function(state = intialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}
