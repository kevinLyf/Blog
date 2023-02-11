import mongoose from 'mongoose';
mongoose.set('strictQuery', false);

const connectDatabase = async () => {
  await mongoose
    .connect(process.env.MONGOOSE_URL, {
      useNewUrlParser: 'true',
      useUnifiedTopology: 'true',
    })
    .then(() => {
      console.log('|SERVER| Database connected');
    })
    .catch((err) => {
      console.log(`|SERVER| ${err.message}`);
      console.log(process.env.MONGOOSE_URL);
    });
};

export default connectDatabase;
