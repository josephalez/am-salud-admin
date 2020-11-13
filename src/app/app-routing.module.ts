import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { AdminGuardService } from './services/auth/only-admin.service';
import { RoleGuardService } from './services/auth/role-guard.service';
import { AtencionGuard } from './services/auth/atencion.guard';


const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    {
        path: 'home',
        loadChildren: './pages/dashboard/dashboard.module#DashboardPageModule',
        canActivate: [AuthGuardService]
    },

    {
        path: 'login',
        loadChildren: './pages/login/login.module#LoginPageModule'
    },
    {
        path: 'personal-add',
        loadChildren: './pages/personal-add/personal-add.module#PersonalAddModule',
        canActivate: [AuthGuardService, AtencionGuard]
    },

    {
        path: 'services',
        loadChildren: './pages/services/services.module#ServicesPageModule',
        canActivate: [AuthGuardService, AdminGuardService]
    },

    {
        path: 'schedule',
        loadChildren: './pages/schedule/schedule.module#SchedulePageModule',
        canActivate: [AuthGuardService, RoleGuardService]
    },

    {
        path: 'profile',
        loadChildren: './pages/profile/profile.module#ProfilePageModule',
        canActivate: [AuthGuardService]
    },

    {
        path: 'my-reservations',
        loadChildren: './pages/my-reservations/my-reservations.module#MyReservationsModule',
        canActivate: [AuthGuardService, RoleGuardService]
    },

    {
        path: 'users',
        loadChildren: './pages/users/users.module#UsersModule',
        canActivate: [AuthGuardService, AtencionGuard]
    },

    {
        path: 'laser-zones',
        loadChildren: './pages/laser-zones/laser-zones.module#LaserZonesModule',
        canActivate: [AuthGuardService, AtencionGuard]
    },
    {
        path: 'paquetes',
        loadChildren: './pages/paquete/paquete.module#PaqueteModule',
        canActivate: [AuthGuardService, AtencionGuard]
    },
    {
        path: 'personal-list',
        loadChildren: './pages/personal-list/personal-list.module#PersonalListModule',
        canActivate: [AuthGuardService, AtencionGuard]        
    },
    {
        path: 'expedients',
        loadChildren: './pages/expedients/expedients.module#ExpedientsModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'assistance',
        loadChildren: './pages/assistance/assistance.module#AssistanceModule',
        canActivate: [AuthGuardService]
    },
    {
        path: 'sessions',
        loadChildren: './pages/sessions/sessions.module#SessionsModule',
        canActivate: [AuthGuardService]
    },
    { 
        path: 'workers',
        loadChildren: './pages/workers/workers.module#WorkersModule',
        canActivate: [AuthGuardService, AtencionGuard]
    },
    { 
        path: 'workers-edit',
        loadChildren: './pages/workers-edit/workers-edit.module#WorkersEditModule',
        canActivate: [AuthGuardService, AtencionGuard]
    },
    { 
        path: 'products',
        loadChildren: './pages/products/products.module#ProductsModule',
        canActivate: [AuthGuardService, AtencionGuard]
    },
    { 
        path: 'prices',
        loadChildren: './pages/prices/prices.module#PricesModule',
        canActivate: [AuthGuardService, AdminGuardService]
    },
    { 
        path: 'categories',
        loadChildren: './pages/categories/categories.module#CategoriesModule',
        canActivate: [AuthGuardService, AtencionGuard]
    },
    { 
        path: 'credits',
        loadChildren: './pages/credits/credits.module#CreditsModule',
        canActivate: [AuthGuardService, AtencionGuard]
    },
    { 
        path: 'pedidos',
        loadChildren: './pages/products-list/products-list.module#ProductsListModule',
        canActivate: [AuthGuardService, AtencionGuard]
    },
    { 
        path: 'nosotros',
        loadChildren: './pages/nosotros/nosotros.module#NosotrosModule',
        canActivate: [AuthGuardService, AtencionGuard]
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            useHash: true,//fix para recargar
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
