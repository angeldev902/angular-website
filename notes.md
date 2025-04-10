### CLI

# Instalación

--> ng new angular-website

ng g m nombre-del-modulo --routing  # Módulo con rutas
ng g s nombre-del-servicio     # Crear servicio
ng g c nombre-del-componente   # Crear componente

ng generate component --skip-tests=true component-name


ng generate guard --skip-tests=true core/guards/auth

ng generate service --skip-tests=true core/services/event-bus-service

ng g interceptor --skip-tests=true core/interceptors/block-ui


### Comandos actualizados

ng generate module auth --route auth --module app.module

ng generate component auth/login --module=auth

###  --------------------------------------------- Pruebas unitarias 

##  ¿Qué se prueba en Angular?

# Componentes

- Que se renderiza correctamente.
- Que responde a eventos (click, input, etc.).
- Que llama métodos como debe.
- Que actualiza el DOM según el estado.

# Services

- Que realiza correctamente llamadas HTTP.
- Que maneja errores como se espera.
- Que retorna observables correctos.
- Que ejecuta lógica interna bien.

# Pipes, directivas, guards, etc.

También se pueden testear individualmente.

### Herramientas para hacer pruebas

## Karma
Ejecuta las pruebas en un navegador (Chrome, headless, etc.)

## Jasmine
Framework de pruebas: define los describe, it, expect, etc.

# Estructura de prueba

- beforeEach(...): Este bloque se ejecuta antes de cada prueba individual (it). Aquí se configura el entorno.
    - TestBed es como un simulador de Angular que prepara los componentes para pruebas.
    - fixture = TestBed.createComponent(...) crea una instancia del componente como si estuviera en la app real.
    - fixture.detectChanges() renderiza el componente.
- describe: Es una agrupación de pruebas. Puedes pensar que es como una carpeta que contiene varios it.  Significa: Voy a probar este componente.
- it: Cada it representa una prueba individual
- expect(...): Se usa para hacer afirmaciones o verificaciones.
- spyOn(...): Sirve para espiar o interceptar un método y verificar si fue llamado:
- By.css(...): Es parte de @angular/platform-browser. Permite buscar elementos en el DOM del componente:

### Pruebas (Revisar el archivo de pruebas custom-button.component.spec.ts)

- toBeTruthy()	El componente se creó correctamente
- textContent	Se muestra el texto que pasas con @Input()
- onClick.emit	El evento onClick se dispara al hacer clic
- button.disabled	El botón se desactiva cuando disabled=true

### Comando para correr pruebas

--> ng test
--> npm run test

### WARNING

El comando "npm run test" ejeuctara las pruebas de todos los arhivos TODOS, se recomienda no crear inmediatamente todos los archivos a la vez en su lugar se debe de hacer algunas de las siguientes opciones:

- Ir creando los archivos cuando se vaya a hacer pruebas sobre el.
- Renombrar los archivos con ".bak" al final para que no se ejecuten
- Usar "fdescribe" o "fit" en lugar de "describe" 

```typescript 
// original
describe('CustomButtonComponent', () => {

})
//Esto hará que solo ese bloque de pruebas se ejecute.
fdescribe('CustomButtonComponent', () => {

})

fit('should create', () => {
  // solo esta se ejecutará
});

```

### -----------------------------Interceptor

Un interceptor es una clase que implementa la interfaz HttpInterceptor y te permite interceptar todas las peticiones y respuestas HTTP de tu app.

- Es como un filtro o middleware:

- Puedes modificar la petición (agregar headers, tokens, etc.)

- Puedes modificar o manejar la respuesta

- Puedes capturar errores globales

- Puedes hacer logs, mostrar loaders, y más.


Para Angular 16+ (incluye Angular 19)

Tu AuthInterceptor debe ser una función pura, no una clase inyectada. O, si usas clase, debes retornar una función en el withInterceptors.

Tienes dos formas de solucionarlo:

hixsa

### -----------------------------Comunicación entre componentes
Para comunicar componentes que no son padre e hijo se debe de crear un servicio y hacer uso de la herramienta:

BehaviorSubject 

Antes se usaba: Subject

# Diferencia entre Subject y BehaviorSubject
Subject no guarda el último valor emitido.

BehaviorSubject guarda el valor actual y se lo entrega a los nuevos subscriptores automáticamente.

Por eso es ideal para estados como el login.


### ---------------------------------Angular material 
Se usa principalmente para hacer modales y tambien para mostrar mensajes pequeños

# Instalación 

--> ng add @angular/material

- Recomentaciones
1. Selecciona el tema azure blue
2. Set up global Angular Material typography styles?  Es mejor darle que no ya que puede interferir con tipografias en el futuro


### -----------------------------------lazy loading
Comportamiento por defecto en Angular (sin lazy loading)
Si no usas lazy loading de módulos o componentes, Angular hace esto al construir la app:

- Carga todos los módulos y componentes declarados en el AppModule y sus módulos hijos.

- Aunque no se rendericen todos los componentes en pantalla (como BrandsComponent si estás en /products), el código de esos componentes ya está incluido en el bundle inicial, o sea, ya está "cargado" en memoria.

Esto significa que:

- Angular solo muestra/renderiza los componentes de la ruta actual.

- Pero sí ha cargado en memoria los componentes de otras rutas, lo que puede hacer que la app inicial tarde más en cargar si tu app crece.

Para implementar lazy components se debe de hacer en el archivo donde se definen las rutas:

loadComponent: () => import('../app/pages/auth/login/login.component').then(m => m.LoginComponent)

