var People = function(){
	var name;

	this.setName = function(inName){
		name = inName;
	};

	this.sayName = function(){
		console.log(name)
	}
}

module.exports = People;