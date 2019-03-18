import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'loginApp';

  ngOnInit(){

    // Initialize Firebase
var config = {
  apiKey: "AIzaSyAmh53rs9oT3uTWzjDkBtVt5oAgKKUnKIA",
  authDomain: "capgemini-cb6d3.firebaseapp.com",
  databaseURL: "https://capgemini-cb6d3.firebaseio.com",
  projectId: "capgemini-cb6d3",
  storageBucket: "capgemini-cb6d3.appspot.com",
  messagingSenderId: "1077313443243"
};
firebase.initializeApp(config);
}
}