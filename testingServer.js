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





// this code testing continuously writing
let count = 0;
const writeopen = fs.createWriteStream('contTest.txt', {flags: 'a'});
// upper code 'a' is mean append. 'w' is existing content erase
writeopen.on('open', (data)=>{
	let str = "line: ";
	setTimeout(()=>{
		console.log("start contTest.txt file continuously");
	}, 0);
	setInterval(()=>{
		writeopen.write(str + count++ + "\n");
	}, 1000);
});




// this code directory testing - create tempdir directory
fs.mkdir('tempdir', (e)=>{
	if(e){
		throw e;
	}
	console.log("create tempdir directory");
});
// this code directory testing - create inner tempdir new directory 10 amount
for(let i = 1; i< 5; i++){
	fs.mkdir('tempdir/myfolder0' + i, (err)=>{
		if(err){
			throw err;
		}
		console.log("create child folder0" + i);
	});
} 
// this code directory testing - read directory file list
setTimeout(()=> {
fs.readdir('tempdir', (err, files)=>{
	if(err){
		throw err;
	}
	console.log('read Directory: ', files); 
});
}, 1000);
