import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({

exports:[
  MatCheckboxModule,
  MatListModule,
  MatExpansionModule,
  MatTreeModule,
  MatIconModule,
  MatInputModule
],

providers: [

],
declarations: [],
imports: [
  CommonModule
]
})
export class MaterialModule { }