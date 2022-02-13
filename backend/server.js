const express = require('express');
const app = express();
const ForumRoutes = require('./routes/ForumRoutes');
const DependencyConfig = require('./configs/DependencyConfig')

// DEPENDENCIES CONFIGURATION
new DependencyConfig(app)

// ALL ROUTES
new ForumRoutes(app);

app.use((req,res,next)=>{
  var _send = res.send;
  var sent = false;
  res.send = (data) =>{
    if(sent) return;
    _send.bind(res)(data);
    sent = true;
};
  next();
});


// INVALID URL
app.get('*', async (req, res) => {
  await res.status(404).send('Page not found!');
});

// SERVER
const PORT = process.env.PORT || 3200;
app.listen(PORT, console.log(`SERVER IS RUNNING AT PORT ${PORT}`));