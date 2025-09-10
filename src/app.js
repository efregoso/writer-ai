import pg from 'pg';
// Frequent imports that I'm keeping on hand:
// const fs = require('fs');
// const os = require('os');
// const https = require('https');

/* Constants */
const { Pool, Client } = pg;

/* 
 * Main file for Writer.AI web app.
 * Planned user journey thus far:
 *  1. Start up DB
 *  2. Prompt for password
 *  3. If correct password provided, establish connection with database
 *  4. Load saved notes and links
**/

async function main() {
  // Defining a client for testing
  const testClient = new Client({
    user: 'postgres',
    password: 'admin',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
  })

  await testClient.connect();

  console.log("------- Client connected -------");

  const res = await testClient.query('SELECT * FROM characters');
  console.log('------- res -------\n', res.rows);
  await testClient.end();
}

await main();


