// function doWork(shouldFail){
// 	return new Promise(function(resolve, reject){
// 		setTimeout(function(){
// 			if (typeof shouldFail === 'boolean' && shouldFail === true){
// 				reject('error message');
// 			}else{
// 				resolve('success');
// 			}
// 		}, 1000)
// 	});
// }

// doWork().then(function(){
// 	return doWork(true);
// }).then(function(){
// 	console.log('all done!');
// }, function(){

// }).catch(function(error){
// 	console.log(error);
// });

function getLocation(){
	return new Promise(function(resolve, rejext){
		resolve('Philadelphia');
	});
}

function getWeather(location){
	return new Promise(function(resolve, rejext){
		resolve('Its 78 in ' + location);
	});
}

getLocation().then(function (location){
	return getWeather(location);
}).then(function(currentWeather){
	console.log(currentWeather);
})