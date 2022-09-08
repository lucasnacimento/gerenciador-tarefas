import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { TarefasComponent } from './tarefas/tarefas.component';

const routes: Routes = [
  { path: '', component: TarefasComponent },
  { path: 'nova', component: CadastroComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
