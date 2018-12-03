const mongoose = require('mongoose');
const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],      // This will be a subdocument, not a seperate collection
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },  // This is how we can relate the survey to a particulara user
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
