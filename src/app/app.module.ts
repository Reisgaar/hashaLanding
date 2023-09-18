import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ApolloModule } from 'apollo-angular';
// Pipes
import { ShortWalletPipe } from './pipes/shortWallet.pipe';
import { FormatTimePipe } from './pipes/timeFormat.pipe';
import { CeilPipe } from './pipes/ceil.pipe';
import { FloorPipe } from './pipes/floor.pipe';
import { DatePipe } from '@angular/common';
import { TimeStampIsPastPipe } from './pipes/timeStampIsPast.pipe';
// Components
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { MainComponent } from './pages/blocks/main/main.component';
import { HashaponWorldComponent } from './pages/blocks/hashapon-world/hashapon-world.component';
import { PetsComponent } from './pages/blocks/pets/pets.component';
import { StatsComponent } from './pages/blocks/stats/stats.component';
import { GrowLocationsComponent } from './pages/blocks/grow-locations/grow-locations.component';
import { SeasonsComponent } from './pages/blocks/seasons/seasons.component';
import { PartnersComponent } from './pages/blocks/partners/partners.component';
import { JoinUsComponent } from './pages/blocks/join-us/join-us.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { SectionTitleComponent } from './pages/utils/section-title/section-title.component';
import { RandomizationComponent } from './pages/blocks/randomization/randomization.component';
import { SubsectionTitleComponent } from './pages/utils/subsection-title/subsection-title.component';
import { SeparatorComponent } from './pages/utils/separator/separator.component';
import { SliderComponent } from './pages/utils/slider/slider.component';
import { BambooComponent } from './pages/blocks/bamboo/bamboo.component';

// Factory function required during AOT compilation
export function httpTranslateLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    FormatTimePipe,
    CeilPipe,
    FloorPipe,
    ShortWalletPipe,
    TimeStampIsPastPipe,
    MainComponent,
    HashaponWorldComponent,
    PetsComponent,
    StatsComponent,
    GrowLocationsComponent,
    SeasonsComponent,
    PartnersComponent,
    JoinUsComponent,
    HeaderComponent,
    FooterComponent,
    SectionTitleComponent,
    RandomizationComponent,
    SubsectionTitleComponent,
    SeparatorComponent,
    SliderComponent,
    BambooComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatInputModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    HttpClientJsonpModule,
    ApolloModule,
    TranslateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    MatFormFieldModule,
    MatDialogModule
],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
