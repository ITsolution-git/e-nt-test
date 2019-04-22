import {
} from "../config/type.js";
const ACTIVITY_TYPES = [
  'follow_request',
  'liked_post'
];

const activity = {
  id: 0,
  user: {
    avatar: 'https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg',
    name: 'Peter'
  },

  activityType: 'follow_request',
}

const intialState = {
  activities: [{
    ...activity
  },{
    ...activity,
    id: 1,
    activityType: 'liked_post',
    post: {
      id: 0,
      image: 'https://img1.southernliving.timeinc.net/sites/default/files/styles/portrait_2_3/public/image/2018/03/main/redbud_tree.jpg' 
    }
  },{
    ...activity,
    id: 2
  },{
    ...activity,
    id: 3
  }],
};

export default function(state = intialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}
