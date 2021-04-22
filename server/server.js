const express = require('express');
const path = require('path');
const router = require("./routes/router");
<<<<<<< HEAD
const cors = require('cors');
const app = express();
// const PORT = process.env.PORT || 8080;
// const https = require('https');

=======
const app = express();
// const vhost = require('vhost');
>>>>>>> 1c0faf14f3297efc7549c91cfe0116fde176e07d

app.use("/", router);
app.set('views', __dirname + '/views');

<<<<<<< HEAD

//   app.use(vhost("www.my-domain.co.kr",express.static(path.join(__dirname, '..', 'build/'))));
// app.use(express.static(path.join(__dirname, '..', 'public/')));
=======
>>>>>>> 1c0faf14f3297efc7549c91cfe0116fde176e07d
app.use(express.static(path.join(__dirname, '..', 'build/')));

    // http 서버를 구동 합니다.
    app.listen(3000, () => {
    console.log("3000 server start");
<<<<<<< HEAD
    });
    
  //   https.createServer(options, app).listen(PORT, () => {
  //   // colorConsole.success(`[HTTPS] Soda Server is started on port ${colors.cyan(PORT)}`);
  //   console.log(`Check out the app at https://localhost:${PORT}`);
  // });
=======
    });
>>>>>>> 1c0faf14f3297efc7549c91cfe0116fde176e07d
