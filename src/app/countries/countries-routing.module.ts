import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SelectorPagesComponent } from './pages/selector-pages/selector-pages.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'selec-pages', component: SelectorPagesComponent},
      { path: '**', redirectTo: 'selec-pages' },
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class CountriesRoutingModule { }
