var request = require('request');
// function doWork (data, callback){
// 	callback('done');
// }

// function doWorkPromise (data){
// 	return new Promise(function(resolve, reject){
// 		resolve('everything worked');
// 		reject({
// 			error: 'something bad happened'
// 		});

// 	});
// }

// doWorkPromise('some data').then(function (data){
// 	console.log(data);
// }, function (error){
// 	console.log(error);
// });


function getWeather (location){
	return new Promise (function (resolve, reject){

		var encodedLocation = encodeURI(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=c0a419ccd074ce24c4e746515b7b1bc4';

		if (!location){
			return reject ('No location provided');
		}


		request({url: url, 
			json: true
		}, function (error, response, body){
			/* esta función es un callback. No se ejecuta hasta
			que no se obtienen todos los datos de request */

			if (error){
				reject('Unable to fetch weather');
			}else{
				console.log('Its ' + body.main.temp + ' in ' + body.name);
				resolve(JSON.stringify(body, null, 4));

			}	
		});

	});
}

getWeather('new york').then(function (currentWeather){
	console.log(currentWeather);
}, function (error){
	console.log(error);
})