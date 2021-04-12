const mysql = require('mysql2');
const express = require("express");
const config = require('./config');
// async function main() {
//     // const db = await mysql.createConnection(config);
//     // db.connect((error) => {
//     //     if (error){
//     //         console.log(error);
//     //     } else{
//     //         console.log("MySQL serves start");
//     //     }
//     // });
//     // const [rows, fields] = await db.query('select * from');
//     // console.log(rows[0].phone);
//     db.end();
//
// }
// main();
const db = mysql.createConnection(config);
db.connect((error) => {
    if (error){
        console.log(error);
    } else{
        console.log("MySQL serves start");
    }
});
db.end();