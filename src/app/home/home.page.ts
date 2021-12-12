import { Component } from '@angular/core';
import { environment } from './../../environments/environment';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  enabled = true;

  constructor() {
    if (Capacitor.getPlatform() === 'web') {
      FirebaseAnalytics.initializeFirebase(environment.firebaseConfig);
    }
  }

  setUser() {
    FirebaseAnalytics.setUserId({
      userId: 'test_123',
    });
  }

   setProperty() {
    FirebaseAnalytics.setUserProperty({
      name: 'framework',
      value: 'angular',
    });
   }

   logEvent() {
    FirebaseAnalytics.logEvent({
      name: 'login',
      params: {
        method: 'email'
      }
    });
   }

   toggleAnalytics() {
    this.enabled = !this.enabled;
    FirebaseAnalytics.setCollectionEnabled({
      enabled: this.enabled,
    });
  }

}
