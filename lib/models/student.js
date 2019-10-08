const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('grades', function() {
  const pipeline = [
    { 
      $unwind: {
        path: '$scores'
      } 
    }, 
    { 
      $match: {
        'scores.score': {
          $ne: null
        }
      } 
    }, 
    { 
      $group: {
        _id: '$scores.type',
        min: {
          $min: '$scores.score'
        },
        max: {
          $max: '$scores.score'
        },
        average: {
          $avg: '$scores.score'
        }
      } 
    }
  ];

  return this.aggregate(pipeline);
});

module.exports = mongoose.model('Student', schema);