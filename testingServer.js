const http = require('http');
const port = 80;
const fs = require('fs');

fs.unlink('/text.py', (err)=>{
	if(err) throw err;
	console.log("successfully deleted text.txt");
});

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
