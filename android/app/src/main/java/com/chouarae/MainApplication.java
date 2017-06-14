package com.chouarae;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.zmxv.RNSound.RNSoundPackage;
import com.microsoft.codepush.react.CodePush;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.barefootcoders.android.react.KDSocialShare.KDSocialShare;
import cl.json.RNSharePackage;
import com.facebook.FacebookSdk;
import com.facebook.CallbackManager;
import com.facebook.appevents.AppEventsLogger;
import com.sbugert.rnadmob.RNAdMobPackage;
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.zmxv.RNSound.RNSoundPackage;


import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {



  private static CallbackManager mCallbackManager = CallbackManager.Factory.create();

  protected static CallbackManager getCallbackManager() {
    return mCallbackManager;
  }





  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {






    @Override
    public String getJSBundleFile() {
      return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNSoundPackage(),
            new CodePush(null, getApplicationContext(), BuildConfig.DEBUG),
           
            new VectorIconsPackage(),
            new KDSocialShare(),
            new RNSharePackage(),
          new FBSDKPackage(mCallbackManager),
            new RNAdMobPackage(),
             new RNSoundPackage()
        
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
 FacebookSdk.sdkInitialize(getApplicationContext());
  // If you want to use AppEventsLogger to log events.
  AppEventsLogger.activateApp(this);

    SoLoader.init(this, /* native exopackage */ false);
  }
}