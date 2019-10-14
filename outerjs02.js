let list = [1, 2, 3, 4, 5];
module.exports=()=>{
	for(let i = 0; i< list.length; i++){
		list[i] *= 2;
	}
	return list;
};
