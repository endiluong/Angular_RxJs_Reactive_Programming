import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserEventComponent } from './browser-event/browser-event.component';
import { EventBusComponent } from './event-bus/event-bus.component';
import { LessonsCounterComponent } from './lessons-counter/lessons-counter.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventComponent,
    EventBusComponent,
    LessonsCounterComponent,
    LessonsListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
