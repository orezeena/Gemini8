

// modules 
const express = require('express'); 
const path = require('path')
const app = express();


// Middleware to parse JSON and URL-encoded data 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Set the view engine to EJS
app.set('view engine', 'ejs');




// Set the views folder (optional, default is 'views')
app.set('views', path.join(__dirname, '/views'));



// Serve static files (like CSS, images, etc.) from the public folder
app.use(express.static(path.join(__dirname, '/views/public')));









// Example route for the home page
app.get('/b', (req, res) => {
  // Data to send to the EJS template
  const data = {
    title: "Welcome Page",
    username: "John Doe",
    items: ['Apple', 'Banana', 'Orange']
  };

  // Render the 'index.ejs' template and pass the data object
  res.render('index', data);
});

// Example route for a 'about' page
app.get('/about', (req, res) => {
  //const data = { title: "About Us", description: "This is the about page." };
  res.render('about');
});


// Define a basic route 
app.get('/', (req, res) => { 
    console.log('lets get the party started');
    
    res.render('index'); 
});
 

// Example route 
 app.get('/contact', (req, res) => {
    console.log('lets get the party contact');

    res.render('contact'); 
     }); 
 
 


































 // 404 Middleware (for unmatched routes) 
 app.use((req, res, next) => { 
    res.status(404).json({ error: 'Route not found' });
 }); 
 
 
 // Error-handling middleware 
 app.use((err, req, res, next) => { 
    console.error(err.stack); 
res.status(500).json({ error: 'Something went wrong!' });
 }); 


// Start the server const 
PORT = process.env.PORT || 3000; 
app.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`); 
});