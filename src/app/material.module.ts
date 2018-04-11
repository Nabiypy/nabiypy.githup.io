import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MzInputModule,
    MzValidationModule,
    MzButtonModule,
    MzBadgeModule,
    MzParallaxModule,
    MzCardModule,
    MzToastModule,
    MzTooltipModule,
    MzSidenavModule } from 'ng2-materialize';

@NgModule({
  imports: [
    CommonModule,
    MzInputModule,
    MzValidationModule,
    MzButtonModule,
    MzBadgeModule,
    MzParallaxModule,
    MzCardModule,
    MzToastModule,
    MzTooltipModule,
    MzSidenavModule
  ],
  exports: [
    MzInputModule,
    MzValidationModule,
    MzButtonModule,
    MzBadgeModule,
    MzParallaxModule,
    MzCardModule,
    MzToastModule,
    MzTooltipModule,
    MzSidenavModule
  ],
})
export class CustomMaterializeModule { }

