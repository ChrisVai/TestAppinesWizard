import { Routes } from '@angular/router';
export const wizardsRoute: Routes = [
  {
    path: 'wizards/wizardDetail/:id',
    loadComponent: () =>
      import('../../pages/wizard-detail/wizard-detail.page').then(
        m => m.WizardDetailPage,
      ),
  },
];
