
function doWork(){
	throw new Error ('Unable to do work');
}

try{
	doWork();
}catch(e){
	console.log(e.message);
}finally{
	console.log('Finally block excecuted!');
}

console.log('Try catch ended');
