
      function CheckCheck(){
	  
		var iterat,check=0;
			for(iterat=1;iterat<4;iterat++){
				if(document.getElementById('1check_'+iterat).checked) {
					check+=1;
				}
				if(check>1){
					alert('вы отметили несколько ответов в 4 вопросе.\n отметь один и нажми кнопку');
					ErorkastbIl();
					return(2);
				}
			}
			if(check==0){
				alert('вы не отметили ответов в 4 вопросе.\n отметь один и нажми кнопку');
			}
			check=0;
			for(iterat=1;iterat<4;iterat++){
				if(document.getElementById('2check_'+iterat).checked) {
					check+=1;
				}
				if(check>1){
					alert('вы отметили несколько ответов в 5 вопросе.\n отметь один и нажми кнопку');
					ErorkastbIl();
					return(2);
				}
			}
			if(check==0){
				alert('вы не отметили ответов в 5 вопросе.\n отметь один и нажми кнопку');
				
			}else{
			CheckRad();
			}
			}
		function ErorkastbIl(){	}
		function CheckRad(){
		var count = 0;
			if(document.getElementById('rad1').checked) {
				count+=1;
			}
			if(document.getElementById('rad2.3').checked) {
				count+=1;
			}
			 
			if(document.getElementById('rad3.4').checked) {
				count+=1;
			}
			if(document.getElementById('1check_2').checked) {
				count+=1;
			}
			if(document.getElementById('2check_3').checked) {
				count+=1;
			}
			
			var quest;
			if(count >4){
				quest = "вопросов";
			} else {
				quest = "вопроса";
			}
			
			 alert("Вы ответили правильно на "+count+" "+quest+"!");
		}