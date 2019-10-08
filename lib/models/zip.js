const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();


schema.static('populous', function() {
  const pipeline = [
    { 
      $sort: {
        pop: -1
      } 
    },
    { 
      $project: {
        state: '$state',
        pop: '$pop'
      } 
    }, 
    {
      $limit: 10
    }
  ];

  return this.aggregate(pipeline);
});

module.exports = mongoose.model('Zip', schema);