import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';
import { StarshipsPageComponent } from './components/starships-page/starships-page.component';
import { CharactersDetailsPageComponent } from './components/characters-details-page/characters-details-page.component';
import { StarshipsDeteailsPageComponent } from './components/starships-deteails-page/starships-deteails-page.component';
import { ListComponent } from './components/common/list/list.component';
import { AboutPageComponent } from './components/about-page/about-page.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomePageComponent },
  { path: 'characters', component: CharactersPageComponent },
  { path: 'characters/:id', component: CharactersDetailsPageComponent },
  { path: 'starships', component: StarshipsPageComponent },
  { path: 'starships/:id', component: StarshipsDeteailsPageComponent },
  { path: 'about', component: AboutPageComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomePageComponent,
    CharactersPageComponent,
    StarshipsPageComponent,
    CharactersDetailsPageComponent,
    StarshipsDeteailsPageComponent,
    ListComponent,
    AboutPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
