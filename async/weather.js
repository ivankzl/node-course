var request = require('request');

module.exports = function(location){
	
	return new Promise(function(resolve, reject){	

		encodedLocation = encodeURI(location);
		var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + location + '&units=metric&appid=c0a419ccd074ce24c4e746515b7b1bc4';

		if (!location){
			return reject ('No location provided');
		}

		request({url: url, 
			json: true
		}, function (error, response, body){
			if (error){
				reject('Unable to fetch weather');
			}else{
				console.log('Its ' + body.main.temp + ' in ' + body.name);
				resolve(JSON.stringify(body, null, 4));

			}

		});
	});
}