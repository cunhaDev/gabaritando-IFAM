function validar(){
var notas=0;
//quest�o 1
    var y=document.quest.opcao1.length
	ok="N"
	for(x=0;x<y;x++){
		if (document.quest.opcao1[x].checked ) {
			ok="S";
			if(document.quest.opcao1[x].value=='C'){
				notas=notas+1;
			}
		}
	}
	if (ok=="N") {
		window.alert("Falta responder a quest�o 1.");
		return false;
	}
//quest�o 2
    var y=document.quest.opcao2.length  	
  	ok="N"
	for(x=0;x<y;x++){
		if ( document.quest.opcao2[x].checked ) {
			ok="S";
			if(document.quest.opcao2[x].value=='B'){
				notas=notas+1;
			}
		}
	}
	if (ok=="N") {
		window.alert("Falta responder a quest�o 2.");
		return false;
	}
	//quest�o 3
    var y=document.quest.opcao3.length  	
  	ok="N"
	for(x=0;x<y;x++){
		if ( document.quest.opcao3[x].checked ) {
			ok="S";
			if(document.quest.opcao3[x].value=='D'){
				notas=notas+1;
			}
		}
	}
	if (ok=="N") {
		window.alert("Falta responder a quest�o 3.");
		return false;
	}

	//quest�o 4
    var y=document.quest.opcao4.length  	
  	ok="N"
	for(x=0;x<y;x++){
		if ( document.quest.opcao4[x].checked ) {
			ok="S";
			if(document.quest.opcao4[x].value=='C'){
				notas=notas+1;
			}
		}
	}
	if (ok=="N") {
		window.alert("Falta responder a quest�o 4.");
		return false;
	}



	//quest�o 5
    var y=document.quest.opcao5.length  	
  	ok="N"
	for(x=0;x<y;x++){
		if ( document.quest.opcao5[x].checked ) {
			ok="S";
			if(document.quest.opcao5[x].value=='A'){
				notas=notas+1;
			}
		}
	}
	if (ok=="N") {
		window.alert("Falta responder a quest�o 5.");
		return false;
	}


	//quest�o 6
    var y=document.quest.opcao6.length  	
  	ok="N"
	for(x=0;x<y;x++){
		if ( document.quest.opcao6[x].checked ) {
			ok="S";
			if(document.quest.opcao6[x].value=='B'){
				notas=notas+1;
			}
		}
	}
	if (ok=="N") {
		window.alert("Falta responder a quest�o 6.");
		return false;
	}


	//quest�o 7
    var y=document.quest.opcao7.length  	
  	ok="N"
	for(x=0;x<y;x++){
		if ( document.quest.opcao7[x].checked ) {
			ok="S";
			if(document.quest.opcao7[x].value=='B'){
				notas=notas+1;
			}
		}
	}
	if (ok=="N") {
		window.alert("Falta responder a quest�o 7.");
		return false;
	}


	//quest�o 8
    var y=document.quest.opcao8.length  	
  	ok="N"
	for(x=0;x<y;x++){
		if ( document.quest.opcao8[x].checked ) {
			ok="S";
			if(document.quest.opcao8[x].value=='D'){
				notas=notas+1;
			}
		}
	}
	if (ok=="N") {
		window.alert("Falta responder a quest�o 8.");
		return false;
	}


	//quest�o 9
    var y=document.quest.opcao9.length  	
  	ok="N"
	for(x=0;x<y;x++){
		if ( document.quest.opcao9[x].checked ) {
			ok="S";
			if(document.quest.opcao9[x].value=='A'){
				notas=notas+1;
			}
		}
	}
	if (ok=="N") {
		window.alert("Falta responder a quest�o .");
		return false;
	}





	//quest�o 10
    var y=document.quest.opcao10.length  	
  	ok="N"
	for(x=0;x<y;x++){
		if ( document.quest.opcao10[x].checked ) {
			ok="S";
			if(document.quest.opcao10[x].value=='B'){
				notas=notas+1;
			}
		}
	}
	if (ok=="N") {
		window.alert("Falta responder a quest�o 10.");
		return false;
	}

    nota.innerText = " "+notas;
    gravar.disabled="disabled";








    for(x=0;x<y;x++){
		document.quest.opcao1[x].disabled="disabled";
		document.quest.opcao2[x].disabled="disabled";
		document.quest.opcao3[x].disabled="disabled";
		document.quest.opcao4[x].disabled="disabled";
		document.quest.opcao5[x].disabled="disabled";
		document.quest.opcao6[x].disabled="disabled";
		document.quest.opcao7[x].disabled="disabled";
		document.quest.opcao8[x].disabled="disabled";
		document.quest.opcao9[x].disabled="disabled";
		document.quest.opcao10[x].disabled="disabled";
    }



    setTimeout('pararTempo()',1);
 return true;
}
function validarAutomatico(){
	var notas=0;
	//quest�o 1
	    var y=document.quest.opcao1.length
		for(x=0;x<y;x++){
			if (document.quest.opcao1[x].checked ) {			
				if(document.quest.opcao1[x].value=='C'){
					notas=notas+1;
				}
			}
		}		
	//quest�o 2
	    var y=document.quest.opcao2.length
		for(x=0;x<y;x++){
			if (document.quest.opcao2[x].checked ) {
				if(document.quest.opcao2[x].value=='B'){
					notas=notas+1;
				}
			}
		}
	  //quest�o 3
	    var y=document.quest.opcao3.length
		for(x=0;x<y;x++){
			if (document.quest.opcao3[x].checked ) {
				if(document.quest.opcao3[x].value=='D'){
					notas=notas+1;
				}
			}
		}
	    //quest�o 4
	    var y=document.quest.opcao4.length
		for(x=0;x<y;x++){
			if (document.quest.opcao4[x].checked ) {
				if(document.quest.opcao4[x].value=='C'){
					notas=notas+1;
				}
			}
		}

	    //quest�o 5
	    var y=document.quest.opcao5.length
		for(x=0;x<y;x++){
			if (document.quest.opcao5[x].checked ) {
				if(document.quest.opcao5[x].value=='A'){
					notas=notas+1;
				}
			}
		}


	    //quest�o 6
	    var y=document.quest.opcao6.length
		for(x=0;x<y;x++){
			if (document.quest.opcao6[x].checked ) {
				if(document.quest.opcao6[x].value=='B'){
					notas=notas+1;
				}
			}
		}

	    //quest�o 7
	    var y=document.quest.opcao7.length
		for(x=0;x<y;x++){
			if (document.quest.opcao7[x].checked ) {
				if(document.quest.opcao7[x].value=='B'){
					notas=notas+1;
				}
			}
		}


	    //quest�o 8
	    var y=document.quest.opcao8.length
		for(x=0;x<y;x++){
			if (document.quest.opcao8[x].checked ) {
				if(document.quest.opcao8[x].value=='D'){
					notas=notas+1;
				}
			}
		}


	    //quest�o 9
	    var y=document.quest.opcao9.length
		for(x=0;x<y;x++){
			if (document.quest.opcao9[x].checked ) {
				if(document.quest.opcao9[x].value=='A'){
					notas=notas+1;
				}
			}
		}


	    //quest�o 10
	    var y=document.quest.opcao10.length
		for(x=0;x<y;x++){
			if (document.quest.opcao10[x].checked ) {
				if(document.quest.opcao10[x].value=='B'){
					notas=notas+1;
				}
			}
		}


	    nota.innerText = " "+notas;
	    gravar.disabled="disabled";
	    for(x=0;x<y;x++){
			document.quest.opcao1[x].disabled="disabled";
			document.quest.opcao2[x].disabled="disabled";
			document.quest.opcao3[x].disabled="disabled";
			document.quest.opcao4[x].disabled="disabled";
			document.quest.opcao5[x].disabled="disabled";
			document.quest.opcao6[x].disabled="disabled";
			document.quest.opcao7[x].disabled="disabled";
			document.quest.opcao8[x].disabled="disabled";
			document.quest.opcao9[x].disabled="disabled";
			document.quest.opcao10[x].disabled="disabled";
	    }
	    setTimeout('pararTempo()',1);
	 return true;
}
