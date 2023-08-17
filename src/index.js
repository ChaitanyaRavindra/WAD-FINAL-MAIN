const app =require( "./server");
const mongoose =require ("mongoose")
const port = process.env.PORT || 3000;
const connecttomongo=async()=>{
    try {
      
      await mongoose.connect('mongodb://127.0.0.1:27017/mydatabase', { useNewUrlParser: true });
    } catch (error) {
        console.log(error)
      
    }
  }
  connecttomongo()

app.listen(port, () =>
  console.log('Example app listening on port 3000!'),
);