import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [
   { path: 'slider', loadComponent: () => import('./slider/slider.component').then(m => m.SliderComponent)},

    
];
