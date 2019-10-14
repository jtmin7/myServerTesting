const http = require('http');
const port = 80;
const fs = require('fs');

// multiThread - make child Process
// function: present directory list
const exec = require('child_process').exec;
exec('ls -al', (error, stdout, stderr) =>{
        if(error) {
                console.error('exec error: ${error}');
                return;
        }
	// this line show ls -al output
	console.log(stdout); 
	console.log(stderr);
	// this line require parse
	console.log('stdout: ${stdout}');
	console.log('stderr: ${stderr}');
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







/*
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
