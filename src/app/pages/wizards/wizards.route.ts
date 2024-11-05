import { Routes } from '@angular/router';
export const wizardsRoute: Routes = [
  {
    path: 'wizards/wizard/:id',
    loadComponent: () =>
      import('../../pages/wizard-detail/wizard-detail.page').then(
        m => m.WizardDetailPage,
      ),
  },
];
