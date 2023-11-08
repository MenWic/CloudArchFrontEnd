import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeTopNavbarComponent } from './employee/employee-top-navbar/employee-top-navbar.component';
import { AdminTopNavbarComponent } from './admin/admin-top-navbar/admin-top-navbar.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { EmployeeHomeComponent } from './employee/employee-home/employee-home.component';
import { EmployeeViewComponent } from './employee/employee-view/employee-view.component';
import { AdminViewComponent } from './admin/admin-view/admin-view.component';
import { FileCardComponent } from './components/file-card/file-card.component';
import { DirCardComponent } from './components/dir-card/dir-card.component';
import { NewEmployeeFormComponent } from './components/new-employee-form/new-employee-form.component';
import { CreateFileComponent } from './components/create-file/create-file.component';
import { EditFileComponent } from './components/edit-file/edit-file.component';
import { ShareFileComponent } from './components/share-file/share-file.component';
import { SharedComponent } from './components/shared/shared.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CreateDirComponent } from './components/create-dir/create-dir.component';
import { MoveFileComponent } from './components/move-file/move-file.component';
import { MoveDirComponent } from './components/move-dir/move-dir.component';
import { CreateEmployeeComponent } from './admin/create-employee/create-employee.component';
import { TrashComponent } from './admin/trash/trash.component';
import { SharedFileCardComponent } from './components/shared-file-card/shared-file-card.component';
import { SharedDirCardComponent } from './components/shared-dir-card/shared-dir-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeTopNavbarComponent,
    AdminTopNavbarComponent,
    AdminHomeComponent,
    EmployeeHomeComponent,
    EmployeeViewComponent,
    AdminViewComponent,
    FileCardComponent,
    DirCardComponent,
    NewEmployeeFormComponent,
    CreateFileComponent,
    EditFileComponent,
    ShareFileComponent,
    SharedComponent,
    ProfileComponent,
    CreateDirComponent,
    MoveFileComponent,
    MoveDirComponent,
    CreateEmployeeComponent,
    TrashComponent,
    SharedFileCardComponent,
    SharedDirCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
