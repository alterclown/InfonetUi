import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogueComponent } from './dialogue/dialogue.component';
import { CreateInformationComponent } from './information/create-information/create-information.component';
import { InformationComponent } from './information/information.component';
import { UpdateInformationComponent } from './information/update-information/update-information.component';

const routes: Routes = [
  {path:'', component: InformationComponent, pathMatch: 'full'},
  {path: 'information/create', component: CreateInformationComponent, pathMatch: 'full'},
  {path: 'information/update/:id', component: UpdateInformationComponent, pathMatch: 'full'},
  {path: 'information/dialogue/:id', component: DialogueComponent, pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
