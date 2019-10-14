const http = require('http');
const port = 8000;
const fs = require('fs');
const cluster = require('cluster');

let count = 0;
cluster.setupMaster({
	// ** cluster fixation
	exec: 'worker.js',
});
// ** make cluster
const worker = cluster.fork();
// ** worker -> master (receive message)(master event)
worker.on('message', (msg)=> {
	console.log(msg, ": " , count);
	count++;
})
.on('error', ()=> {
	console.log("Error!");
});







/*
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
*/
// **port 80: 127.0.0.1 
// **port 8000: localhost:8000
// **port 8800: localhost:8800









/*
--------------------------------------------------------------------
setTimeout(()=>{
	fs.unlink('test.txt', (err)=>{
		if(err) throw err;
		console.log("successfully deleted text.txt");
	});
}, 1000);

fs.writeFile('test.txt', 'hello world', (err) => {
	if(err) throw err;
	console.log('File write completed');
});
setTimeout(()=>{
	fs.open('test.txt','a', (err, fd)=>{
		if(err) throw err;
		fs.write(fd, "\nhello this is new", (err, written)=>{
			if(err) throw err;
			console.log(written + "bytes written");
			fs.close(fd, ()=>{
				console.log('Done');
			});
		});
	});
});
*/
