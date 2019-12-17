import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'multiLanguage';

  constructor(public translateService: TranslateService) {
    translateService.addLangs(['en', 'punjabi']); // json file names
    translateService.setDefaultLang('en'); // select deafult json file
    const browserLang = translateService.getBrowserLang();
    translateService.use(browserLang.match(/en|punjabi/) ? browserLang: 'en');
  }

  changeLanguage(lang:string){
    this.translateService.use(lang)
  }
}
