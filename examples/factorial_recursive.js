function factorial(x) {
	if(x<=0){
		return 1;
	} else {
		return x * factorial(x -1);
	}
}

var facts = [3, 6, 8, 10];
facts.map(function(val, index, arr){
	console.log('factorial(%s) = %s', val, factorial(val));
});
