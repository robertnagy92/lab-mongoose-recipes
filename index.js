const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any documents to the database, let's delete all previous entries
    return self.connection.dropDatabase();
  })
  .then((result) => {
    // Run your code here, after you have insured that the connection was made
     Recipe.create({
      title: "Biggot Sandwich",
      level: "Amateur Chef",
      ingredients: [
        "Layers of ham", "bacon", "turkey","juicy tomatoes", "cheese" 
      ],
      cuisine: "American",
      dishType: "other",
      image: "https://images.media-allrecipes.com/images/75131.jpg",
      duration: 50,
      creator: "Chef Billy Bob"
    })
  })
  .then((result) => {
      console.log(result)
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
