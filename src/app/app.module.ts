import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Microphone Component
import { MicrophoneComponent } from './microphone/microphone.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    MicrophoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
