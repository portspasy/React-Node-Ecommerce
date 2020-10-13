const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //Connection with the DB
    const connection = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(connection.connection.host.cyan.underline);
  } catch (error) {
    console.error(error.message.red.underline.bold);
    process.exit(1);
  }
};

module.exports = connectDB;
