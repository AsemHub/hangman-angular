import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PoorKidComponent } from './poor-kid/poor-kid.component';
import { GameControlService } from './gameControl.service';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KeyboardComponent } from './keyboard/keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PoorKidComponent,
    PlaceholderComponent,
    KeyboardComponent,
  ],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [GameControlService],
  bootstrap: [AppComponent],
})
export class AppModule {}
