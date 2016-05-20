$(document).ready(function(){
	var target = prompt("Please enter a positive non-decimal number.", "100");
	var max = parseInt(target);
	while(max % 1 != 0){
	target = prompt("Please enter a positive non-decimal number.", "100");
	max = parseInt(target);
	}
	function fizzbuzz(limit){
		var count = 0;
		while(count < limit){
			count++;
			if (count % 3 == 0){
				if (count % 5 ==0){
				$(document.body).append("\nfizzbuzz\n");
				}
            	else {
            	$(document.body).append("\nfizz\n");
        		}
        	}
			else if (count % 5 == 0){
			$(document.body).append("\nbuzz\n");
			}
		else{
			$(document.body).append("\n" + count + "\n");
		}
	}}
	fizzbuzz(max);
})