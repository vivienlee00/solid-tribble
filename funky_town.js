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

    return(gcd(b, a % b));

    //stolen from StackOverflow
}

var randomStudent = function(){

    var list = ["Vivien","James","Chloe"];
    var randomnumber = Math.floor(Math.random() * list.length);

    console.log(list[randomnumber]);
}

var buttonCallback = function(e){

    console.log(e);
    console.log(this);
    return null;

}

var fibb = document.getElementById('fib');
fibb.addEventListener("click", function() { fibonacci(12) });

var denomm = document.getElementById('denom');
denomm.addEventListener("click", function() {console.log(gcd(36,72)) });

var randoo = document.getElementById('rando');
randoo.addEventListener("click", randomStudent);

//var b = document.getElementById('b');
//b.addEventListener("click", buttonCallback);
