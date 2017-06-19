var myPromise = function () {
	this.state = 'unfulfilled';
 	this.promise = new Promise();
	EventEmitter.call(this);
};
util.inherits(myPromise, EventEmitter);
myPromise.prototype.then = function (fulfilledHandler, errorHandler, progressHandler) {
	if (typeof fulfilledHandler === 'function') {
		// ૧用once()方法ǈԍ证成功回调ኻ执行ᅃْ
		this.once('success', fulfilledHandler);
	}
	if (typeof errorHandler === 'function') {
		// ૧用once()方法ǈԍ证异常回调ኻ执行ᅃْ
		this.once('error', errorHandler);
	}
	if (typeof progressHandler === 'function') {
		this.on('progress', progressHandler);
	}
	return this;
}; 

};
myPromise.prototype.resolve = function (obj) {
 this.state = 'fulfilled';
 this.promise.emit('success', obj);
};
myPromise.prototype.reject = function (err) {
 this.state = 'failed';
 this.promise.emit('error', err);
};
myPromise.prototype.progress = function (data) {
 this.promise.emit('progress', data);
}