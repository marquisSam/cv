import { TranslateModule } from '@ngx-translate/core';
import {
  ApplicationConfig,
  importProvidersFrom,
  LOCALE_ID,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader } from '@ngx-translate/core';

import localeFr from '@angular/common/locales/fr';
import localeEn from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';

// Enregistrement des locales
registerLocaleData(localeFr, 'fr');
registerLocaleData(localeEn, 'en');

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withFetch()),
    provideRouter(routes),
    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
    {
      provide: LOCALE_ID,
      useFactory: () => (window as any).__locale_id__ || 'en',
    },
  ],
};
