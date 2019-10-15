const http = require('http');
const port = 8000;
const fs = require('fs');

let count = 0;
const server = http.createServer((req, res) => {
	if(req.url == '/') {
		// ** read html file
		// ** I don't know why, but when connecting to the site with the script,
		//   the HttpConnection increases the length.
		let inputhtml = 'index.html';
		showHtml(inputhtml, req, res);
	// ** if url is like 'longPolling' 	
	}else if(req.url == '/longpolling'){
		// ** put req&res in HttpConnection
		// ** In reality, you should use sesssion key values
		//   to treat them with redis, cookies, ...
		HttpConnection.push([req, res]);
	// ** when unexpected url is rleased, the following site is posted
	}else{
		console.log(req.url);
		let inputhtml = 'index02.html';
		showHtml(inputhtml, req, res);	
	}
});
server.listen(80, (err)=>{
	if(err){
		console.log(err);
	}
	console.log('Server running');
});
// ** Send data over and over again every 30 Seconds
let HttpConnection = [];
setInterval(()=>{
	// ** show size of data to be sent
	console.log('httpConnection data length: [', HttpConnection.length, ']');
	if(HttpConnection.length>0){
		const Connection = HttpConnection.pop();
		const res = Connection[1];
		let str = 'Renewal by longPoll[' + HttpConnection.length + ']: '+ res;
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		// ** show res information to a client
		res.end(str);
	}
}, 3*1000);

const showHtml=((inputhtml, req, res)=>{
	fs.readFile(inputhtml, 'utf8', (err, data) =>{
		if(err){
			res.statusCode = 404;
			res.setHeader('Content-Type', 'text/plain');
			res.end('File Not Found\n');
		// ** if html file normal, send a html file
		}else{ 
			res.statusCode = 200;
			res.setHeader('Content-Type', 'text/html');
			res.end(data);
		}
	});
});



// ** book information 
// ** p.107
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
