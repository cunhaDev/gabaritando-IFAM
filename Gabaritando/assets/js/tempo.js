var contador = new Number();
var contador = 1;
var hh = 0
var mm= 40//
var ss = 0
var hor;
var min;
var seg;
var parada=1;

function pararTempo(){	
	parada=0;
}
function iniciarDecrementoTempo(){	
	if(hh==0 && mm==0 && contador==1 ){
		document.quest.submit()
		return 
	}
	if(	(contador - 1) >= 0){
		contador = contador - 1;	   
	   if(hh<10){
		  hor='0'+hh; 
	   }
	   if (mm < 10) {
		   min=':0'+mm;
	   }
	   if(contador<10){
		   seg=':0'+contador;
	   }
	   if(hh>10){
		   hor=hh; 
	   }
	   if (mm >10) {
		  min=':'+mm;
	   }
	   if(contador>10){
		  seg=':'+contador;
	   }	  
	   if (ss==0) {
		  if (contador == 00){
			hh = 0
			mm = 40//
			contador = 40//
			ss = 1		   
		  }
	   }
	   else {
		 if (contador == 00){
			mm = mm - 1
			contador = 40//
		 }
	   }	  
	   if(mm>0){
		 temporizador.innerText = hor+''+min+''+seg;
		 if(parada==1){
		   setTimeout('iniciarDecrementoTempo()',mm);
		 }
	   }
	   else{
		   temporizador.innerText = '00'+':'+'00'+':'+'00';
		   gravar.disabled="disabled";
		   setTimeout('validarAutomatico()',1); 
	   }
	}
}
