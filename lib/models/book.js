const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema();

schema.static('pageCount', function() {
  const pipeline = [
    { 
      $unwind: {
        path: '$authors'
      } 
    }, 
    { 
      $project: {
        author: '$authors',
        pageCount: '$pageCount'
      } 
    }, 
    { 
      $group: {
        _id: '$author',
        pageCount: {
          $avg: '$pageCount'
        }
      } 
    }, 
    { 
      $sort: {
        '_id': 1
      } 
    }, 
    { $match: {
      _id: {
        $ne: ''
      }
    } 
    }
  ];

  return this.aggregate(pipeline);
});

module.exports = mongoose.model('Book', schema);