import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomButtonComponent } from './custom-button.component';
import { By } from '@angular/platform-browser'; // Para buscar elementos del DOM

// # describe: Es una agrupación de pruebas. Puedes pensar que es como una carpeta que contiene varios it.
describe('CustomButtonComponent', () => {
  let component: CustomButtonComponent;
  let fixture: ComponentFixture<CustomButtonComponent>;

  // # beforeEach(...): Este bloque se ejecuta antes de cada prueba individual (it). Aquí se configura el entorno.
  beforeEach(async () => {
    // # TestBed es como un simulador de Angular que prepara los componentes para pruebas.
    await TestBed.configureTestingModule({
      imports: [
        CustomButtonComponent,  // porque es standalone
      ]
    })
    .compileComponents();

    // # fixture = TestBed.createComponent(...) crea una instancia del componente como si estuviera en la app real.
    fixture = TestBed.createComponent(CustomButtonComponent);
    component = fixture.componentInstance;
    // # fixture.detectChanges() renderiza el componente.
    fixture.detectChanges();
  });

   //# Cada it(...) representa una prueba individual:
  it('should create', () => { // Esta prueba revisa si el componente fue instanciado con éxito.
    component.name = 'Presionar';
    expect(component).toBeTruthy(); // Verifica que el componente existe
  });

  it('deberia mostrar el texto pasado como nombre', () => {
    component.name = 'Presionar';
    fixture.detectChanges();

    // # By.css(...): Es parte de @angular/platform-browser. Permite buscar elementos en el DOM del componente:
    const buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;
    //# expect(...): Se usa para hacer afirmaciones o verificaciones.
    expect(buttonEl.textContent.trim()).toBe('Presionar') // Verifica texto
  });

  it('deberia estar deshabilitado si disabled=true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;
    expect(buttonEl.disabled).toBeTrue();
  })

  //Para probar se debe de retirar if (this.onClick.observed) { del componente original
  // it('Deberia emitir el evento onClick al hacer click', () => {
  //   // #spyOn(...): Sirve para espiar o interceptar un método y verificar si fue llamado:
  //   spyOn(component.onClick, 'emit');
    
  //   const buttonEl = fixture.debugElement.query(By.css('button')).nativeElement;
  //   buttonEl.click(); // Esto sí llama al (click)="handleClick()"
  //   fixture.detectChanges();
  
  //   expect(component.onClick.emit).toHaveBeenCalled();
  // });
  
});
