import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/guest/login/login.component';
import { MemberComponent } from './components/member/member.component';
import { IncidentGridComponent } from './components/member/incident-grid/incident-grid.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'member',
        component: MemberComponent,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'incident', pathMatch: 'full' },
            {
                path: 'incident',
                component: IncidentGridComponent
            }
        ]
    }

];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
