package com.food_delivery_app;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactContext;
import com.mehcode.reactnative.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {




  @Override
  protected void onCreate(Bundle savedInstanceState) {

    SplashScreen.show(this,null);
//    SplashScreen.show(this, getReactInstanceManager());
    super.onCreate(savedInstanceState);

  }


  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "food_delivery_app";
  }




}
