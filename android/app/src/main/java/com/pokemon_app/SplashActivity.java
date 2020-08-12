package com.pokemon_app;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;

public class splashActivity extends AppCompatActivity  {
    @Override
    protected  void  onCreate(Bundle saveInstance){
        super.onCreate(saveInstance);
        Intent intent = new Intent(this,MainActivity.class);
        startActivity(intent);
        finish();

    }
}
