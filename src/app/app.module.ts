import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { AboutMeComponent } from './aboutme/aboutme.component';
import { AboutDetailComponent } from './about-detail/about-detail.component';
import { AboutService} from './about.service'
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service'

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    AboutDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ AboutService, MessageService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
