	var count = 1;
	while(count < 101){
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
		count++;
	}