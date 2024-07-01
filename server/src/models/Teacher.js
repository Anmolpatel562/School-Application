const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true
  },
  dob: {
    type: Date,
    required: true
  },
  contactDetails: {
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    }
  },
  salary: {
    type: Number,
    required: true
  },
  assignedClass: {
    type: Schema.Types.ObjectId,
    ref: 'Class'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Teacher', teacherSchema);

