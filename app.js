const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');

app.use(cors());

// don't show the log when it is test
if (process.env.NODE_ENV !== 'test') {
    // use morgan to log at command line
    app.use(morgan('combined')); // 'combined' outputs the Apache style LOGs
}

app.get("/", (req, res) => {
  res.send("My-app client started");
});

app.get("/json", (req, res) => {
    const data = {
              data: {
                msg: "Hello World"
              }
      };
      res.json(data);
  });

app.get("/hello/:msg", (req, res) => {
    const data = {
      data: {
        msg: req.params.msg
      }
    };
    res.json(data);
  });

// Save editor document
app.post('/documents', (req, res) => {
    const documentData = req.body;
    saveDocument(documentData);

    res.send({ sucess: true });
});

// Start up server
app.listen(port, () => console.log(`Example API listening on port ${port}!`));
