var $ = window;
/* 贾建容测试 */

$.defer = function(func) {

	var state = 'pending';
	var doneList = [];
	var failList = [];
	
	doneList.fire = failList.fire = function(args) {
		this.forEach( function(cb){
			cb.apply(null, args)
		} )
	};
	
	var slice = Array.prototype.slice;
	
	
	var promise = {
		
		resolve: function() {
			state = 'resolved';
			doneList.fire(arguments);
		},
		
		reject: function() {
			state = 'rejected';
			failList.fire(arguments);
		},
	
		done: function() {
			slice.apply(arguments).forEach( function(arg){
				doneList.push(arg);
			} )
		},
		
		fail: function() {
			slice.apply(arguments).forEach( function(arg){
				failList.push(arg);
			} )
		},
		
		then: function(cb) {
			var args = slice.apply(null,arguments);
			var _this = this;
			
			return promise(function(d){
				_this.done(function(){
					//promise
				})
			});
			
			
			if ( typeof cb.promise === 'function' ) {
				
			}
		}
		
	}
	
	if (func) func.call(promise, promise);
	
	return promise;
	
}







var d = $.defer();
d.done(function(){console.log(1)})
d.done(function(){console.log(arguments)})
d.resolve('wwwww')