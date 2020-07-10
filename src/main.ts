import { Like } from './app/like.component';

import { enableProdMode, Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
let like = new Like(10, true);
like.onClick();

console.log(`like count: ${like.likesCount}, isSelected: ${like.isSelected}`)
