import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCBv5lkLvkN_L6Q6VlN44y5F8ZaadM3Pn0',
      authDomain: 'intense-heat-3763.firebaseapp.com',
      databaseURL: 'https://intense-heat-3763.firebaseio.com',
      projectId: 'intense-heat-3763',
      storageBucket: '',
      messagingSenderId: '1007844554841'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
