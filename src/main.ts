import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
// import { provideForms } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([]),
    provideHttpClient(),
  ]
});
