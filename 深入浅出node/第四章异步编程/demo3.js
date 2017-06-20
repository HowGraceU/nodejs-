new Promise(function(a,b){
	setTimeout(function(){
		console.log('第一次延时');
		a();
	}, 200)
}).then(function(){
	console.log(2);
}).then(function(){
	console.log(3)
})

new Promise(function(a,b){
	setTimeout(function(){
		console.log('第一次延时');
		a();
	}, 200)
}).then(function(){
	console.log(2);
	return new Promise(function(a,b){
	setTimeout(function(){
		console.log('第二次延时');
		b();
	}, 200)
})
}).then(function(){
	console.log(3)
}, function(){
	console.log(4)
})