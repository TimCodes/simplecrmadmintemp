import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";

const appRoutes: Routes = [
    // { path: 'crisis-center', component: CrisisListComponent },
    // { path: 'hero/:id',      component: HeroDetailComponent },
    // {
    //   path: 'heroes',
    //   component: HeroListComponent,
    //   data: { title: 'Heroes List' }
    // },
    { path: '',
      component: DashboardComponent,
      pathMatch: 'full'
    }
    //{ path: '**', component: PageNotFoundComponent }
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {
    preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
    // useHash: true
 });