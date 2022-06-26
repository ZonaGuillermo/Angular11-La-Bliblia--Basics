# TABLA DE CONTENIDOS

Las prácticas realizadas en el curso siguen este orden:

1. Componente suma (components/suma)
2. Componente crono (components/crono)
3. Componente calculator (components/calculator)
4. Componente suma-input (components/suma-input)
5. Componente crono-output (components/crono-output)
6. Componente todo-simple (components/todo-simple)
	- @Inputs, @Outputs, [(ngModel)]
7. Componente directives (components/directives)
	- [ngStyle], [ngClass], *ngIf, *ngFor, [ngSwitch], *ngSwitchCase
8. Componente todo-complex (compoents/todo-complex)
9. Componente cash-register (components/cash-register)
10. Componente shopping-list (components/shopping-list) <--- POR HACER



<br>
<br>

### Conceptos

1. Property Binding
	- [textMessage] = "variableMessage"

2. Event Binding
	- (click) = "onClick($event)"

3. Two Way Binding
	- [(ngModel)] (import {FormModule} from '@angular/core')

4. @Input()

5. @Output()

6. Life Cycle
	- ngOnInit
	- ngOnViewInit
	- ngOnChanges

7. Directivas
	- Atributo: [ngStyle], [ngClass]
	- Estructurales: *ngIf, *ngFor, [ngSwitch]
	- Custom   <--- REPASAR
		- elemRef
		- render
		- @HostListener
		- @HostBinding
		- @Input

99. Otros
	- {{ array | json }}