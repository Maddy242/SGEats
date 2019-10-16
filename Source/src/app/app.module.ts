import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomizeComponent} from '../app/customize/customize.component'
import { CustomizeTextComponent } from '../app/customize-text/customize-text.component'
import { FilterComponent } from '../app/filter/filter.component'

@NgModule({
  declarations: [AppComponent, CustomizeComponent, CustomizeTextComponent, FilterComponent],
  entryComponents: [CustomizeComponent, CustomizeTextComponent, FilterComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
