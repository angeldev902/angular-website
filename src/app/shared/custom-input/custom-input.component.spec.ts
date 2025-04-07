import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomInputComponent } from './custom-input.component';
import { ReactiveFormsModule, FormControl } from '@angular/forms'; //Para poder hacer pruebas

describe('CustomInputComponent', () => {
  let component: CustomInputComponent;
  let fixture: ComponentFixture<CustomInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CustomInputComponent,
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomInputComponent);
    component = fixture.componentInstance;

    //Se definira el componente como si se hubiera creado
    component.control = new FormControl('');  // Simulamos el control
    component.label = 'Email';
    component.type = 'email';
    component.id = 'email';
    component.placeholder = 'pedro@gmail.com';
    component.errorMessage = 'Invalid email.';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label', () => {
    const labelEl: HTMLLabelElement = fixture.nativeElement.querySelector('label');
    expect(labelEl.textContent).toContain('Email');
  });

  it('should render placeholder', () => {
    const inputEl: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(inputEl.placeholder).toBe('pedro@gmail.com');
  });

  it('should render input with correct type', () => {
    const inputEl: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(inputEl.type).toBe('email');
  });
  
  it('should render input with correct id', () => {
    const inputEl: HTMLInputElement = fixture.nativeElement.querySelector('input');
    expect(inputEl.id).toBe('email');
  });

  it('should show error with correct message', () => {
    component.control.markAsTouched(); // I touch the input
    component.control.setErrors({ required: true }); // invalid input
    fixture.detectChanges(); // enderiza el componente.

    const errorDiv: HTMLElement = fixture.nativeElement.querySelector('.text-danger');
    expect(errorDiv).toBeTruthy();
    expect(errorDiv.textContent).toContain('Invalid email.');
  });

});
