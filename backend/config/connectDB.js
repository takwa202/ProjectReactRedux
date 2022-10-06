const mongoose = require('mongoose')
const connectDB = async()=> {
   try {
    await mongoose.connect(`mongodb+srv://takwa:Takwa@cluster0.twfkh.mongodb.net/tak?retryWrites=true&w=majority`)
     console.log('connected')   
} catch (error) {
    
   } 
}
module.exports= connectDB