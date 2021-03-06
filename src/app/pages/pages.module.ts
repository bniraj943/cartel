import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GalleryComponent } from '../gallery/gallery.component';

const COMPONENTS = [HomeComponent,GalleryComponent];
const MODULES = [CommonModule, ComponentsModule]

@NgModule({
  declarations: [...COMPONENTS, PageNotFoundComponent],
  imports: [...MODULES]
})
export class PagesModule { }
