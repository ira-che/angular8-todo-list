import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ListComponent } from './components/list/list.component';
import { CountRemainingComponent } from './components/count.remaining/count.remaining.component';
import { SearchComponent } from './components/search/search.component';

import { SettingsService } from './common/services/settings.service';
import { ApiService } from './common/services/api.service';
import { CommonService } from './common/services/common.service';

import { FilterPipe } from './common/pipes/filter.pipe';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule 
    ],
  providers: [
    SettingsService,
    ApiService,
    CommonService
  ],
  declarations: [ 
    AppComponent, 
    WrapperComponent,
    ListComponent,
    CountRemainingComponent,
    SearchComponent,
    FilterPipe 
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
