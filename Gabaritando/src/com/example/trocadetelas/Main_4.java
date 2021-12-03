package com.example.trocadetelas;

import android.os.Bundle;
import android.app.Activity;
import android.content.Intent;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Button;

public class Main_4 extends Activity {
	
	Button bttela1;

	private WebView web;
	
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.tela_4);
        
        web = (WebView)findViewById(R.id.webview);
        WebSettings configurarWebView = web.getSettings();
        configurarWebView.setJavaScriptEnabled(true);
        configurarWebView.setJavaScriptCanOpenWindowsAutomatically(true);
        configurarWebView.setSupportMultipleWindows(true);
        configurarWebView.setSupportZoom(false);
        web.setVerticalScrollBarEnabled(true);
        web.setHorizontalScrollBarEnabled(true);
        web.loadUrl("file:///android_asset/index2.html");
        
        
        
        
        
        bttela1 = (Button)
 				findViewById(R.id.bttela1);
         
        bttela1.setOnClickListener(new View.OnClickListener() {

 			@Override
 			public void onClick(View v) {

 				Intent TrocaTela = new
 						Intent(Main_4.this,Main_1.class);
 				Main_4.this.startActivity(TrocaTela);
 				Main_4.this.finish();


 			}
 		});
        
    }
}
