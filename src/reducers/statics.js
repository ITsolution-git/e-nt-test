

const intialState = {
  faqs: [{
    title: 'How does this app protect my privacy?',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
  },{
    title: 'How does this app protect my privacy?',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
  },{
    title: 'How does this app protect my privacy?',
    content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.'
  },{
    title: 'How does this app protect my privacy?',
    content: 'How does this app protect my privacy?'
  },]
};

export default function(state = intialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}
