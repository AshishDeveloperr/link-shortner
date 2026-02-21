const app = require('./src/app');
const connectDB = require('./src/db/db');
require('dotenv').config();



const PORT = process.env.PORT;
connectDB();

app.listen(PORT, () =>{
    console.log('Server is running at '+PORT);
})