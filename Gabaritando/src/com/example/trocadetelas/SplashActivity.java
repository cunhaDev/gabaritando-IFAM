package com.example.trocadetelas;

import android.os.Bundle;
import android.os.Handler;
import android.widget.ProgressBar;
import android.app.Activity;
import android.content.Intent;

public class SplashActivity extends Activity {

	private ProgressBar mProgress;

	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_splash);

		mProgress = (ProgressBar) findViewById(R.id.splash_screen_progress_bar);

		//start na operacao da barra de progresso

		new Thread(new Runnable() {

			@Override
			public void run() {
				Iniciar();
				//startApp();
				//finish();
			}

			/* private void startApp() {
				Intent intent = new Intent(SplashActivity.this, MainActivity.class);
				startActivity(intent);

			} */

			private void Iniciar() {
				for(int progress=0; progress<100; progress+=15){
					try{
						Thread.sleep(1000);
						mProgress.setProgress(progress);
					} catch (Exception e){
						e.printStackTrace();
					}	
				}	
			}

		}).start();

		//logica do tempo de exposicao da splash e indo para outra activity
		new Handler().postDelayed(new Runnable() {

			@Override
			public void run() {

				startActivity(new Intent(getBaseContext(), Main_1.class));
				finish();

			}
		},9000);	
	}
}
