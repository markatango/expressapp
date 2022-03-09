const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log('Database connected')
}).catch((err)=>{
    console.log(err);
});
module.exports={mongoose}
