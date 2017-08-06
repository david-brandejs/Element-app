// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);



//Old AOT:
//import {platformBrowser} from '@angular/platform-browser';
//import {MyAppModuleNgFactory} from './app.ngfactory'; //generated code
//platformBrowser().bootstrapModuleFactory(MyAppModuleNgFactory);