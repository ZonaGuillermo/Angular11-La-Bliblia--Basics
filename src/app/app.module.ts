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
import { NgSwitchComponent } from './components/directives/ng-switch/ng-switch.component';
import { TodoComplexComponent } from './components/todo-complex/todo-complex.component';
import { FormComplexComponent } from './components/todo-complex/form-complex/form-complex.component';
import { ListComplexComponent } from './components/todo-complex/list-complex/list-complex.component';
import { CashRegisterComponent } from './components/cash-register/cash-register.component';
import { ProductsListComponent } from './components/cash-register/products-list/products-list.component';
import { TicketOrderComponent } from './components/cash-register/ticket-order/ticket-order.component';

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
    NgForComponent,
    NgSwitchComponent,
    TodoComplexComponent,
    FormComplexComponent,
    ListComplexComponent,
    CashRegisterComponent,
    ProductsListComponent,
    TicketOrderComponent
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
