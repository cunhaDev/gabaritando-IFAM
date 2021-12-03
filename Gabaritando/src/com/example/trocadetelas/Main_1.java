package com.example.trocadetelas;

import android.os.Bundle;
import android.app.Activity;
import android.content.Intent;
//import android.view.Menu;
import android.view.View;
import android.widget.Button;
import android.widget.Toast;

public class Main_1 extends Activity {


	Button bttela2, bttela4, bttela5, bttela6, bttela7, btnSair;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.tela_1);

		bttela2 = (Button)
				findViewById(R.id.bttela2);

		bttela4 = (Button)
				findViewById(R.id.bttela4);
		

		bttela5 = (Button)
				findViewById(R.id.bttela5);
		
//		bttela6 = (Button)
//				findViewById(R.id.bttela6);
//		
//		bttela7 = (Button)
//				findViewById(R.id.bttela7);
		
		btnSair = (Button)
				findViewById(R.id.btnSair);
		
		bttela2.setOnClickListener(new View.OnClickListener() {

			@Override
			public void onClick(View v) {

				Intent TrocaTela = new
						Intent(Main_1.this,Main_2.class);
				Main_1.this.startActivity(TrocaTela);
				Main_1.this.finish();

				Toast t = Toast.makeText(v.getContext(), "Boa Prova!", Toast.LENGTH_LONG);
		    	t.show();

			}
		});






		bttela4.setOnClickListener(new View.OnClickListener() {

			@Override
			public void onClick(View v) {

				Intent TrocaTela = new
						Intent(Main_1.this,Main_4.class);
				Main_1.this.startActivity(TrocaTela);
				Main_1.this.finish();

				Toast t = Toast.makeText(v.getContext(), "Boa Prova!", Toast.LENGTH_LONG);
		    	t.show();
				
			}
		});
		
		
		bttela5.setOnClickListener(new View.OnClickListener() {

			@Override
			public void onClick(View v) {

				Intent TrocaTela = new
						Intent(Main_1.this,Main_5.class);
				Main_1.this.startActivity(TrocaTela);
				Main_1.this.finish();


				Toast t = Toast.makeText(v.getContext(), "Boa Prova!", Toast.LENGTH_LONG);
		    	t.show();
				
			}
		});
		
//		bttela6.setOnClickListener(new View.OnClickListener() {
//
//			@Override
//			public void onClick(View v) {
//
//				Intent TrocaTela = new
//						Intent(Main_1.this,Main_6.class);
//				Main_1.this.startActivity(TrocaTela);
//				Main_1.this.finish();
//
//				
//				Toast t = Toast.makeText(v.getContext(), "Boa Prova!", Toast.LENGTH_LONG);
//		    	t.show();
//
//			}
//		});
//		
//		bttela7.setOnClickListener(new View.OnClickListener() {
//
//			@Override
//			public void onClick(View v) {
//
//				Intent TrocaTela = new
//						Intent(Main_1.this,Main_7.class);
//				Main_1.this.startActivity(TrocaTela);
//				Main_1.this.finish();
//
//				
//				Toast t = Toast.makeText(v.getContext(), "Boa Prova!", Toast.LENGTH_LONG);
//		    	t.show();
//
//			}
//		});
		
		btnSair.setOnClickListener(new View.OnClickListener() {
			@Override
			public void onClick(View v) {
				finish();
				Toast t = Toast.makeText(v.getContext(), "Ate a Proxima!", Toast.LENGTH_LONG);
		    	t.show();
			}
		});

	}



	
	/* @Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main_1, menu);
		return true;
	} */

}
