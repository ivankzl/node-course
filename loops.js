function countDownFor (startingPoint, stoppingPoint){
	for(; startingPoint >= stoppingPoint; startingPoint--){
		console.log('countDownFor: ' + startingPoint);
	}
}

countDownFor(20, 10);