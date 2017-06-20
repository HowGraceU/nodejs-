var async = require('async');

console.time('series')  
async.series([
	function(a){setTimeout(function(){a(undefined,1);},500)},
	function(a){setTimeout(function(){a(undefined,2);},2000)}
	],
	function(a,b,c,d){console.log(a,b,'series');console.timeEnd('series')}
	)


console.time('parallel')  
async.parallel([
	function(a){setTimeout(function(){a(0,1);},500)},
	function(a){setTimeout(function(){a(1,2);},1000)}
	],
	function(a,b,c,d){console.log(a,b,'parallel');console.timeEnd('parallel')}
	)


// console.time('1') 
// console.time('2') 
// console.time('3') 
// console.time('4') 
// console.time('5') 
// console.time('6') 
// var deps = {
// 	1: function (callback) {
// 		setTimeout(function(){
// 			console.timeEnd('1');
// 			callback();
// 		}, 500)
// 	},
// 	2: ['1', function (callback) {
// 		setTimeout(function(){
// 			console.timeEnd('2');
// 			callback();
// 		}, 500)
// 	}],
// 	3: ['1', function (callback) {
// 		setTimeout(function () {
// 			console.timeEnd('3');
// 			callback();
// 		}, 500)
// 	}],
// 	4: function (callback) {
// 		setTimeout(function () {
// 			console.timeEnd('4');
// 			callback();
// 		}, 500)
// 	},
// 	5: ['4', function (callback) {
// 		setTimeout(function () {
// 			console.timeEnd('5');
// 			callback();
// 		}, 500)
// 	}],
// 	6: ['2', '3', '5', function (callback) {
// 		setTimeout(function () {
// 			console.timeEnd('6');
// 			callback();
// 		}, 500)
// 	}]
// }; 

// async.auto(deps);