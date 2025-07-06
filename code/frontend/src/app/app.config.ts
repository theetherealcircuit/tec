
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { icons } from './components/shared/icons/icons.dependency';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling, withRouterConfig } from '@angular/router';
import { routes } from './app.routes';
import { FeatherModule } from 'angular-feather';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes, withInMemoryScrolling({ scrollPositionRestoration: 'disabled' }),
    withRouterConfig({ onSameUrlNavigation: 'reload', paramsInheritanceStrategy: 'always' })),
  importProvidersFrom(FeatherModule.pick(icons)),
  provideClientHydration(withEventReplay()),
  provideAnimations(),
  provideHttpClient()]
};
