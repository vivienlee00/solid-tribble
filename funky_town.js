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

    var list = [];

    var loadList = function(n){
    }

    var getFromList = function(){
	return 
    }

    list=loadList(n);
}
