const express = require('express');
const app = express();
const mongoose = require("mongoose");
// const Doctor = require('./models/Doctor');
// const Patient = require('./models/Patient');
// const doctorRputes = require('./routes/doctor');
// const patientRoutes = require('./routes/patient');

app.use(express.json());
//app.use('/api/stuff',doctorRoutes);
// app.use('/api/stuff',patientRoutes);
//CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//   app.use((req, res, next) => {
//     res.end('Réponse envoyée avec succès !');
//   });
 
  //connexion mongoose
  mongoose.connect('mongodb+srv://fy:fy24@cluster0.yphpz.mongodb.net/TDbd?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

module.exports= app;