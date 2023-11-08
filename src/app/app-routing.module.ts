import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EmployeeViewComponent } from './models/employee/employee-view/employee-view.component';
import { AdminViewComponent } from './models/admin/admin-view/admin-view.component';
import { AdminHomeComponent } from './models/admin/admin-home/admin-home.component';
import { CreateFileComponent } from './controllers/file/create-file/create-file.component';
import { EditFileComponent } from './controllers/file/edit-file/edit-file.component';
import { MoveDirComponent } from './controllers/dir/move-dir/move-dir.component';
import { MoveFileComponent } from './controllers/file/move-file/move-file.component';
import { ShareFileComponent } from './controllers/file/share-file/share-file.component';
import { CreateDirComponent } from './controllers/dir/create-dir/create-dir.component';
import { CreateEmployeeComponent } from './controllers/employees/create-employee/create-employee.component';
import { TrashHomeComponent } from './controllers/trash/trash-home/trash-home.component';
import { SharedHomeComponent } from './controllers/shared/shared-home/shared-home.component';
import { ChangePasswordComponent } from './controllers/profile/change-password/change-password.component';

const routes: Routes = [
  {
    path: '*',
    component: LoginComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'employeeMenu',
    component: EmployeeViewComponent,
  },
  {
    path: 'adminMenu',
    component: AdminViewComponent,
    children: [
      { path: 'adminHome/:variable', component: AdminHomeComponent }, //Archivos y Carpetas en raiz
      { path: 'crearArchivo/:variable', component: CreateFileComponent }, //Form de creacion
      { path: 'editarArchivo/:variable', component: EditFileComponent }, //Form de edicion
      { path: 'moverArchivo/:variable', component: MoveFileComponent }, //Form para movimiento
      { path: 'compartirArchivo/:variable', component: ShareFileComponent }, //Form para compartir
      { path: 'crearCarpeta/:variable', component: CreateDirComponent }, //Form de creacion
      { path: 'moverCarpeta/:variable', component: MoveDirComponent }, //Form para movimiento
      { path: 'perfil', component: ChangePasswordComponent }, //Form patra actualizacion
      { path: 'compartidos', component: SharedHomeComponent }, //Archivos y Carpetas recibidos
      { path: 'crearEmpleado', component: CreateEmployeeComponent }, //Form de creacion
      { path: 'papelera', component: TrashHomeComponent }, //Archivos y Carpetas eliminados
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
