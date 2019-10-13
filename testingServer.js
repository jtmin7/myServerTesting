const http = require('http');
const port = 80;
const fs = require('fs');

// this code safety fs
const fd = fs.createWriteStream('data.txt', {flags: 'w'});

// this code safety fs use
fd.on('open', ()=>{
	fd.write("data");
	fd.end(()=>{
		console.log("safety fs end");
	});
});

 
fs.writeFile('test.txt', 'hello world', (err) => {
	if(err) throw err;
	console.log('File write completed');
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

fd.on
/*
setTimeout(()=>{
	fs.unlink('test.txt', (err)=>{
		if(err) throw err;
		console.log("successfully deleted text.txt");
	});
}, 1000);

*/
