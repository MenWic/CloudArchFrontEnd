import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CookieService} from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EmployeeTopNavbarComponent } from './models/employee/employee-top-navbar/employee-top-navbar.component';
import { AdminTopNavbarComponent } from './models/admin/admin-top-navbar/admin-top-navbar.component';
import { AdminHomeComponent } from './models/admin/admin-home/admin-home.component';
import { EmployeeHomeComponent } from './models/employee/employee-home/employee-home.component';
import { EmployeeViewComponent } from './models/employee/employee-view/employee-view.component';
import { AdminViewComponent } from './models/admin/admin-view/admin-view.component';

import { FileCardComponent } from './models/objects/file-card/file-card.component';
import { DirCardComponent } from './models/objects/dir-card/dir-card.component';
import { SharedFileCardComponent } from './models/objects/shared-file-card/shared-file-card.component';
import { SharedDirCardComponent } from './models/objects/shared-dir-card/shared-dir-card.component';
import { TrashFileCardComponent } from './models/objects/trash-file-card/trash-file-card.component';
import { TrashDirCardComponent } from './models/objects/trash-dir-card/trash-dir-card.component';

import { CreateFileComponent } from './controllers/file/create-file/create-file.component';
import { EditFileComponent } from './controllers/file/edit-file/edit-file.component';
import { ShareFileComponent } from './controllers/file/share-file/share-file.component';
import { MoveFileComponent } from './controllers/file/move-file/move-file.component';

import { CreateDirComponent } from './controllers/dir/create-dir/create-dir.component';
import { MoveDirComponent } from './controllers/dir/move-dir/move-dir.component';

import { TrashHomeComponent } from './controllers/trash/trash-home/trash-home.component';
import { ChangePasswordComponent } from './controllers/profile/change-password/change-password.component';
import { SharedHomeComponent } from './controllers/shared/shared-home/shared-home.component';
import { HomeOptionsComponent } from './models/objects/home-options/home-options.component';
import { ShowFileContentComponent } from './controllers/file/show-file-content/show-file-content.component';
import { EmployeeServiceComponent } from './services/employee-service/employee-service.component';

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
    SharedFileCardComponent,
    SharedDirCardComponent,
    TrashFileCardComponent,
    TrashDirCardComponent,

    CreateFileComponent,
    EditFileComponent,
    ShareFileComponent,
    MoveFileComponent,

    CreateDirComponent,
    MoveDirComponent,

    TrashHomeComponent,
    ChangePasswordComponent,
    SharedHomeComponent,
    HomeOptionsComponent,
    ShowFileContentComponent,
    EmployeeServiceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
