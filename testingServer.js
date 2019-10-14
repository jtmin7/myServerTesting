const fs = require('fs');

// **multiThread - make cluster
const cluster = require('cluster');
const http = require('http');
// **master-Cluster position
if(cluster.isMaster) {
	var clusterArray = new Array();
	let numReqs = 0;
	// **child cluster notify signal num print
	setInterval(()=>{
		console.log('numReqs&cpuCores = (', numReqs, ', ' , numCPUs, ')');
	}, 1000);
	// **message hendler
	const messageHendler = (msg)=>{
		if(msg.cmd && msg.cmd == 'notifyRequest'){
			console.log("Notify Request");
			numReqs += 1;
		}
	}
	// **get cpu core num
	const numCPUs = require('os').cpus().length;
	for(let i=0; i<numCPUs; i++){
		// **make cluster
		clusterArray[i] = cluster.fork();
		console.log("New Fork_", i);
	}
	// **cluster message & handler Connect
	Object.keys(cluster.workers).forEach((id)=>{
		cluster.workers[id].on('message', messageHendler);
	});
	// **cluster -> master (receive message event)
	for(let i=0; i<numReqs; i++){
		clusterArray[i].on(listening, (address)=>{
			console.log("cluster -> master : messageAccept");
			// **master -> cluster (send message)
			clusterArray[i].send('recrmsg');
		});
	}	
// **cluster-Cluster position
}else if(cluster.isWorker){
/*
	http.Server((req, res)=> {
		res.writeHead(200);
		res.end('hello world\n');
		process.send({ cmd: 'notifyRequest' });
	}).listen(8000);
*/
	const net = require('net');
	const server = net.createServer((socket)=>{});
	server.listen(8000);
	console.log("cluster exec");

	// **master -> cluster (receive message event)
	process.on('message', (msg) =>{
		console.log("cluster: message receive event");
		if(msg == 'recvmsg'){
			console.log("cluster: message receive successful");
		}	
	});

}
// multiThread - make cluster
// master-Cluster position
	// child cluster notify signal num print
	// message hendler
	// get cpu core num
	// cluster message & handler Connect
// cluster-Cluster position







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
