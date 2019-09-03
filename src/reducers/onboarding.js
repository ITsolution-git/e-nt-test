
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
    id: 4, title: 'Creative/Freelancer',
  },{
    id: 5, title: 'Aspiring Entrepreneur',
  },{
    id: 6, title: 'Business Professional',
  },{
    id: 7, title: 'Influncer',
  },{
    id: 8, title: 'Adviser/Consultant',
  }],

  industries: [{
    id: 0, title: 'Tech/Startup',
  },{
    id: 1, title: 'Investing/Trading',
  },{
    id: 2, title: 'Freelance/Creative/Art/Music',
  },{
    id: 3, title: 'None/Other/Student',
  },{
    id: 4, title: 'Web/App Development',
  },{
    id: 5, title: 'Ecommerce/Blog/Podcast',
  },{
    id: 6, title: 'Fitness/Wellness',
  },{
    id: 7, title: 'Coaching/Consulting',
  },{
    id: 8, title: 'Marketing/Advising/Media',
  },{
    id: 9, title: 'Legal/Accounting/Services',
  },{
    id: 10, title: 'Real Estate/Construction',
  },{
    id: 11, title: 'Sales/Affiliate Marketing',
  },],

  lookingFors: [{
    id: 0, title: 'Co-Founders/Team',
  },{
    id: 1, title: 'Investors/Funding',
  },{
    id: 2, title: 'Developers',
  },{
    id: 3, title: 'Education',
  },{
    id: 4, title: 'Mentor/Coach',
  },{
    id: 5, title: 'Networking/Events',
  },{
    id: 6, title: 'Jobs/Gigs',
  },{
    id: 7, title: 'Collaboration',
  },{
    id: 8, title: 'Influencers',
  },{
    id: 9, title: 'Investment Deals',
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
