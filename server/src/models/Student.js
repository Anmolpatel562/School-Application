const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other','male','female','other'],
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
      type: Number,
      required: true
    }
  },
  feesPaid: {
    type: Boolean,
    required: true,
    default: false
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: 'Class'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Student', studentSchema);
