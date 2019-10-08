const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

const sort = order => {
  if(order === 'top') {
    return { $sort: { avg: -1 } };
  }

  if(order === 'bottom') {
    return { $sort: { avg: 1 } };
  }
};

schema.static('hourly', function(order) {
  const pipeline = [
    { 
      $match: {
        ticker: 'abcd'
      } 
    }, 
    { 
      $project: {
        ticker: '$ticker',
        shares: '$shares',
        hour: {
          '$hour': '$time'
        }
      } 
    }, 
    { 
      $group: {
        _id: '$hour',
        shares: {
          '$sum': '$shares'
        }
      } 
    },
    sort(order)
  ];

  return this.aggregate(pipeline);
});

module.exports = mongoose.model('Trade', schema);