var fibonacci = function(n){

    if(n < 1){
	return 0;
    }

    var counter = 0;

    var helper = function(first, second){
	if(counter == n-1){
	    return first;
	}

	counter++;
	return helper(second, first+second);
    }

    console.log(helper(1,1));
}

var gcd = function(a,b){
    if (!b){
	return a;
    }

    return gcd(b, a % b);

    //stolen from StackOverflow
}

var randomStudent = function(){

    var list = [0,1,2];
    var randomnumber = Math.floor(Math.random() * list.length);

    return list[randomnumber];
}
