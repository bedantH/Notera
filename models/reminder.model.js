const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reminderSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, required: true }
}
);

const Reminder = mongoose.model("Reminder", reminderSchema);

module.exports = Reminder;