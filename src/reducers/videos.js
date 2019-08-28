
const video = {
  id: 0,

  description: ''
}

const intialState = {
  videos: [{
    ...video
  },{
    ...video,
    id: 1
  },{
    ...video,
    id: 2
  },{
    ...video,
    id: 3
  }],
  video: video
};

export default function(state = intialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}
