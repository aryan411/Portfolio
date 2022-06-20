// <!--     Author- Aryan Patel       -->
// <!--     StudentID-301226774     -->

//  Import Mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema; // alias for mongoose.Schema

//  Create a Schema that matches the data
const ContactSchema = new Schema
({
    Name: String,
    ContactNumber: String,
    Email: String,
},
{
    collection: "contactList"
});

// Create a Model using the Schema
const Model = mongoose.model("ContactDetails", ContactSchema);

//  Export the Model -> this makes the file a module
export default Model;