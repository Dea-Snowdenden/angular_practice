import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

var firebaseConfig = {

  };


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
