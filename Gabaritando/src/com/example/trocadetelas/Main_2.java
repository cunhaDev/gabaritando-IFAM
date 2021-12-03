package com.example.trocadetelas;

import android.os.Bundle;
import android.annotation.SuppressLint;
import android.app.Activity;
import android.content.Intent;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Button;

@SuppressLint("SetJavaScriptEnabled") public class Main_2 extends Activity {
	
	Button bttela1;
	
	private WebView web;
	
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.tela_2);
        web = (WebView)findViewById(R.id.webview);
        WebSettings configurarWebView = web.getSettings();
        configurarWebView.setJavaScriptEnabled(true);
        configurarWebView.setJavaScriptCanOpenWindowsAutomatically(true);
        configurarWebView.setSupportMultipleWindows(true);
        configurarWebView.setSupportZoom(false);
        web.setVerticalScrollBarEnabled(true);
        web.setHorizontalScrollBarEnabled(true);
        web.loadUrl("file:///android_asset/index.html");
        
            
        bttela1 = (Button)
				findViewById(R.id.bttela1);
        
		bttela1.setOnClickListener(new View.OnClickListener() {

			@Override
			public void onClick(View v) {

				Intent TrocaTela = new
						Intent(Main_2.this,Main_1.class);
				Main_2.this.startActivity(TrocaTela);
				Main_2.this.finish();


			}
		});
        
    }
}
