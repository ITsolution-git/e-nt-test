import {
} from "../config/type.js";

const intialState = {
  jobs: [{
    id: 0, title: 'Entrepreneur',
  },{
    id: 1, title: 'Investor',
  },{
    id: 2, title: 'Developer/Designer',
  },{
    id: 3, title: 'Student',
  },{
    id: 4, title: 'Entrepreneur',
  },{
    id: 5, title: 'Entrepreneur',
  },{
    id: 6, title: 'Entrepreneur',
  },{
    id: 7, title: 'Entrepreneur',
  },],

  industries: [{
    id: 0, title: 'Tech/Startup',
  },{
    id: 1, title: 'Investing/Trading',
  },{
    id: 2, title: 'Freelance/Creative/Art/Music',
  },{
    id: 3, title: 'Student',
  },{
    id: 4, title: 'Entrepreneur',
  },{
    id: 5, title: 'Entrepreneur',
  },{
    id: 6, title: 'Entrepreneur',
  },{
    id: 7, title: 'Entrepreneur',
  },],

  lookingFors: [{
    id: 0, title: 'Co-Founders/Team',
  },{
    id: 1, title: 'Investors/Funding',
  },{
    id: 2, title: 'Developers',
  },{
    id: 3, title: 'Student',
  },{
    id: 4, title: 'Entrepreneur',
  },{
    id: 5, title: 'Entrepreneur',
  },{
    id: 6, title: 'Entrepreneur',
  },{
    id: 7, title: 'Entrepreneur',
  },],

  locations: [{
    id: 0, title: 'New York City'
  },{
    id: 1, title: 'San Fransisco'
  },{
    id: 2, title: 'Los Angels'
  },{
    id: 3, title: 'New York City'
  },]
};

export default function(state = intialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}
