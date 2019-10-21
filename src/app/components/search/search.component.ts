import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { SettingsService } from '../../common/services/settings.service';

@Component({
  selector: `search`,
  template: `<input type="text" placeholder="filter tasks" #filter (keyup)="letFilter(filter.value)"/>`
})

export class SearchComponent {
  public searchSubject$ = new Subject<string>();

  constructor(
    private settingsService: SettingsService
  ) {
  }

  public letFilter( data: string ): void {
    this.settingsService.searchText = data;
  }
}
