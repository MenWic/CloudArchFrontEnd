import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CreateFileComponent } from './components/create-file/create-file.component';
import { EditFileComponent } from './components/edit-file/edit-file.component';
import { MoveDirComponent } from './components/move-dir/move-dir.component';
import { MoveFileComponent } from './components/move-file/move-file.component';
import { ShareFileComponent } from './components/share-file/share-file.component';
import { CreateDirComponent } from './components/create-dir/create-dir.component';
import { CreateEmployeeComponent } from './admin/create-employee/create-employee.component';
import { TrashComponent } from './admin/trash/trash.component';
import { SharedComponent } from './components/shared/shared.component';

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
      { path: 'adminHome/:variable', component: AdminHomeComponent },
      { path: 'crearArchivo/:variable', component: CreateFileComponent },
      { path: 'editarArchivo/:variable', component: EditFileComponent },
      { path: 'moverArchivo/:variable', component: MoveFileComponent },
      { path: 'compartirArchivo/:variable', component: ShareFileComponent },
      { path: 'crearCarpeta/:variable', component: CreateDirComponent },
      { path: 'moverCarpeta/:variable', component: MoveDirComponent },
      { path: 'crearEmpleado', component: CreateEmployeeComponent },
      { path: 'papelera', component: TrashComponent },
      { path: 'compartidos', component: SharedComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
