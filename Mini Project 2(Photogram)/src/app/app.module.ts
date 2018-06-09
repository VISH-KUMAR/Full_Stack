import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//importing routes
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/cards/cards.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UploadPhotoComponent } from './components/upload-photo/upload-photo.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const appRoutes: Routes = [
    { path:'', component:RegisterComponent },
    { path:'login' , component:LoginComponent },
    { path:'dashboard' , component:DashboardComponent },
    { path:'upload-photo', component:UploadPhotoComponent }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    LoginComponent,
    RegisterComponent,
    UploadPhotoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
