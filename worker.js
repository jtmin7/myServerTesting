// ** this file for isolate master and worker
// ** worker position

setInterval(()=>{
	process.send('worker');
}, 1000);
// ** on purpose make error
setTimeout(()=>{
	error_function();
}, 5000);


