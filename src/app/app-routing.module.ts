import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppComponent } from './app.component';
import { Sample1Component } from './sample1/sample1.component';
import { MemoryComponent } from './sample2/memory.component';

const routes: Routes = [
    { path: 'sample1', component: Sample1Component },
    { path: 'sample2', component: MemoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
