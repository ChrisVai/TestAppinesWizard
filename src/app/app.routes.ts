import { Routes } from '@angular/router';
import { tabsRoutes } from './pages/tabs/tabs.routes';
import { wizardsRoute } from './pages/wizards/wizards.route';

export const routes: Routes = [...tabsRoutes, ...wizardsRoute];
