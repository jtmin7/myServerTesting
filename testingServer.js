const http = require('http');
const port = 80;
const fs = require('fs');

// require use outer js file
// './' this address mean is current folder
const user = require('./outerjs.js');
user.main();

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello!');
});
server.listen(port, (err)=> {
 	if(err){
		console.log(err);
	}
	let object_item = {1:1, b:'c'};
	console.log(1, object_item);
	console.log('Running Server');
});

setInterval(()=>{
	console.log("Now Time is ", new Date());
}, 2 * 1000);



/*
setTimeout(()=>{
	fs.unlink('test.txt', (err)=>{
		if(err) throw err;
		console.log("successfully deleted text.txt");
	});
}, 1000);

*/
