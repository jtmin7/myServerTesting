// ** this file for isolate master and worker
// ** worker position

setInterval(()=>{
	process.send('worker');
}, 1000);
