import React, { useState } from 'react';
import Axios from 'axios';
import {
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  } from 'recharts';

export default function Result() {
    
  let data = [
    {
      subject: 'Willy', cnt: 110
    },
    {
      subject: 'Wigo', cnt: 98
    },
    {
      subject: 'Tommy', cnt: 86
    },
    {
      subject: 'Buddy', cnt: 99
    },
  ];

  let [a, seta] = useState("");
    // 
    function search(){
      
      let todate = "2021-02-01";
      let fromdate = "2021-02-28";
        Axios.get("search_stats", { params: { todate, fromdate }}).
        then(res => {
            // json 형태로 넣어서 뷰에 뿌려주면 될듯.
            console.log(res.data[0]);
            bind(res);
        });
        // bind(data);
    }

    function bind(param_data){
      console.log(param_data.data[0].CNT);

      data = [
        {
          subject: 'Willy', cnt: param_data.data[0].CNT
        },
        {
          subject: 'Wigo', cnt: param_data.data[1].CNT
        },
        {
          subject: 'Tommy', cnt: param_data.data[3].CNT
        },
        {
          subject: 'Buddy', cnt: param_data.data[2].CNT
        },
      ];
      seta(a+1);
    }

    
      
          return (
              <>
                <button onClick={search}>button</button>

                
              </>
            
          );
        }
      

//     return (
//         <>
//             <input type="checkbox" name="chk_All" value="true"></input>
//             <button onClick={search}>ssss</button>
//         </>
//     )
// }
