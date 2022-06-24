import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SumaComponent } from './components/suma/suma.component';
import { CronoComponent } from './components/crono/crono.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { SumaInputComponent } from './components/suma-input/suma-input.component';
import { CronoOutputComponent } from './components/crono-output/crono-output.component';
import { TodoSimpleComponent } from './components/todo-simple/todo-simple.component';
import { FormComponent } from './components/todo-simple/form/form.component';
import { ListComponent } from './components/todo-simple/list/list.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { NgStyleComponent } from './components/directives/ng-style/ng-style.component';
import { NgClassComponent } from './components/directives/ng-class/ng-class.component';
import { NgIfComponent } from './components/directives/ng-if/ng-if.component';
import { NgForComponent } from './components/directives/ng-for/ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    SumaComponent,
    CronoComponent,
    CalculatorComponent,
    SumaInputComponent,
    CronoOutputComponent,
    TodoSimpleComponent,
    FormComponent,
    ListComponent,
    DirectivesComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
