# Simple Firebase Import Script 

This basic import scripts allows you to import a local JSON file containing an array into Firebase.

The script will parse through each object inte array and push them into Firebase to Push each object in the array into Firebase generating a new push key for each new object.

**[Demo](https://lifeonlars.github.io/firebase-array-importer/)**


## What do I need to get this working?

You can use this script on your local machine to migrate JSON data from other sources into Firebase. To do so you'll simply need to view the page via a local http server. 

* Clone the repository to a folder on your computer
* Edit `scripts/main.js` and add your Firebase config in the code of this file (this information can be found in your console)
* Install a local http server e.g. <code>npm install -g http-server</code> (Note this will require NodeJS and NPM to be installed on your local machine)
* Using the command prompt navigate to the folder where you cloned the repository and then start the http server <code>http-server</code>
* Then in your browser navigate to <code>http://127.0.0.1:8080/</code>

*Alternatively you can add your Firebase config settings and then upload to a server somewhere and run the script from there*

