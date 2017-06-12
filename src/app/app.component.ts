import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    let config = {
      apiKey: "AIzaSyD9tFE0lJmPHMonrQ7iR8LmEzw2LylQodQ",
      authDomain: "ionicfirechat-72ed9.firebaseapp.com",
      databaseURL: "https://ionicfirechat-72ed9.firebaseio.com",
      projectId: "ionicfirechat-72ed9",
      storageBucket: "ionicfirechat-72ed9.appspot.com",
      messagingSenderId: "183154989567"
    };
    firebase.initializeApp(config);
  }
}

