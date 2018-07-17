import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { CvComponent } from './cv/cv.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const appRoutes: Routes = [
    { path: 'cv', component: CvComponent },
    { path: 'career', component: CareerComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', component: CvComponent },
    { path: 'not-found', component: FourOhFourComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    declarations: [
        AppComponent,
        CvComponent,
        CareerComponent,
        ContactComponent,
        FourOhFourComponent
    ],
    imports: [
        BrowserModule,
        UiModule,
        NgbCollapseModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
