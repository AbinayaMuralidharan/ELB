import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChatComponent } from './chat/chat.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

const appRoutes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  {path:'topnav',component:TopnavbarComponent},
  {path:'sidenav',component:SidenavComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    ChatComponent,
    TopnavbarComponent,
    ProfileComponent,
    SidenavComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
