import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from '@sentry/angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

Sentry.init({
  release: 'v3',
  dsn: 'https://641ebf2517044eb7a31871db089b127c@o543558.ingest.sentry.io/5664386',
  sampleRate: 1,
  // integrations: [
  //   new Integrations.BrowserTracing({
  //     tracingOrigins: ["localhost", "https://yourserver.io/api"],
  //     routingInstrumentation: Sentry.routingInstrumentation,
  //   }),
  // ],

  defaultIntegrations: false,
  integrations: [
    new Sentry.Integrations.InboundFilters(),
    new Sentry.Integrations.FunctionToString(),
    new Sentry.Integrations.Breadcrumbs({
      console: true,
      dom: false,
      fetch: true,
      history: true,
      sentry: true,
      xhr: true,
    }),
    new Sentry.Integrations.GlobalHandlers(),
    new Sentry.Integrations.LinkedErrors(),
    new Sentry.Integrations.UserAgent(),
  ],

  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 1.0,
  debug: true
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
