const express = require('express');
const router = express.Router();
const path = require("path");

router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../build/index.html"));
  }); 

<<<<<<< HEAD
  router.get('/stats', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../build/index.html"));
  }); 

  router.get('/cc', function(req, res, next) {
    fs.readFile(path.join(__dirname, '../../server/index.html'), function(error, data){
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data, 'utf-8');
    });
  }); 

  router.get('/insta', function(req, res, next) {
    res.sendFile(path.join(__dirname, "../../build/index.html"));
  }); 

// 회원가입 로직
router.post('/save_result',cors(), function(req, res) {
  console.log("back in!!");
  console.log(req.query);
  
  let param = [req.query.tag
    , req.query.resultArray[0], req.query.resultArray[1], req.query.resultArray[2]
    , req.query.resultArray[3], req.query.resultArray[4], req.query.resultArray[5]
    , req.query.resultArray[6], req.query.resultArray[7], req.query.resultArray[8]
    , req.query.resultArray[9], req.query.resultArray[10], req.query.resultArray[11]
    , req.query.resultArray[12], req.query.resultArray[13]
    , req.query.character
    , req.query.extrovert
    , req.query.open
  ];
    
    db.query("CALL PSY_SAVE_RESULT(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",param, (err, rows) => {
  
      if (!err) {
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.json({"result":"success"});
    } else {
      console.log(err);
      res.json({"result":"fail" + rows});
    }
    });
});

// 'localhost:4000/getdata'
router.get('/search_stats', (req, res) => {

  // let query_str = "SELECT * FROM resulttable WHERE 1 = 1 ";
  let query_str = 
  "select \'Willy\' as CHARACTER_NAME, COUNT(*) AS CNT from resulttable where result_char = \'Willy\' "
  +"UNION ALL "
  +"SELECT \'Wigo' AS CHARACTER_NAME, COUNT(*) AS CNT FROM resulttable where result_char = \'Wigo\' "
  +"UNION ALL "
  +"SELECT \'Buddy\' AS CHARACTER_NAME, COUNT(*) AS CNT FROM resulttable where result_char = \'Buddy\' "
  +"UNION ALL "
  +"SELECT \'Tommy\' AS CHARACTER_NAME, COUNT(*) AS CNT FROM resulttable where result_char = \'Tommy\' "
  +"UNION ALL "
  +"SELECT \'TOTAL\' AS CHARACTER_NAME, COUNT(*) AS CNT FROM resulttable";
  console.log(req.query);

  // 날짜 조회
  // if(req.query.todate){
  //   // create_date형태 : 2021-02-11 14:22:01
  //   // substr(create_date,1,10) = 2021-02-11
  //   query_str += "AND substr(create_date,1,10) BETWEEN " + "\'" + req.query.todate + "\'" + " AND " + "\'" + req.query.fromdate + "\'";
  // }
  
  // 성공 쿼리문
  // query_str += " AND substr(create_date,1,10) BETWEEN " + "\'2021-02-01'" + " AND " + "\'2021-02-28'";

  // // 캐릭터 조회
  // if(!req.query.all_char){
  //   let query_char = "";

  //   if(req.query.willy){
  //     query_char += "Willy";
  //   }

  //   if(req.query.wigo){
  //     query_char += "Wigo";
  //   }

  //   if(req.query.buddy){
  //     query_char += "Buddy";
  //   }

  //   if(req.query.tommy){
  //     query_char += "Tommy";
  //   }

  //   query_str += "AND result_char in ("+ query_char + ")";

  // }
  console.log(query_str);
  db.query(query_str, (err, rows) => {
  
    if (!err) {
      if(rows){
        res.json(rows);
      }
    } else {
        console.log(`query error : ${err}`);
        res.send(err);
    }
  });


});

=======
>>>>>>> 1c0faf14f3297efc7549c91cfe0116fde176e07d
module.exports = router;