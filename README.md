# Conoce tu UPTC

Portal web interactivo donde los estudiantes de la Universidad Pedagógica y Tecnológica de Colombia puedan consultar información institucional, servicios médicos, servicios psicológicos, becas y demás prestaciones que ofrece la universidad. El portal provee de un foro donde los estudiantes y miembros de la comunidad pueden compartir inquietudes, dudas, propuestas, etc. y una seccion de noticias que les permitira estar al tanto de las novedades que ocurren dentro de la universidad.

### Pre-requisitos

_El sistema se ha desarrollado con las siguientes herramientes de desarrollo (se recomienda usar las herramientas con la mismas versiones o posteriores):_

```
XAMP v3.2.4+
Node: 12.18.3+
Angular CLI: 10.0.8+
Angular: 10.0.14+
```

### Instalación y Configuración

1. _Descargar el proyecto en la carpeta "C:\xampp\htdocs"_
2. _Ejecutar XAMPP Control Panel y activar los servicios Apache y MySQL_
3. _Abrir una terminal dentro del proyecto y ejecutar el comando para instalar las dependencias_

```
npm install
```

4. _Para ejecutar el construir y ejecutar el sitio se utiliza el comando_

```
ng serve
```

- _El sitio se ejecuta por defecto en `http://localhost:4200/`_

## Ejecutando las pruebas

_Para las pruebas se utiliza Karmajs , este es un test runner, desarrollado por el equipo de angular, que permite automatizar algunas tareas de los frames de tests, este se encarga de ejecutar los test de Javascript según se vayan construyendo, de tal forma que ante cualquier fallo el desarrollador se dará cuenta de inmediato._

1. _Para ejecutar las pruebas unitarias se ejecuta el comando_

```
ng test
```

- _para ejecutar pruebas en un documento en especifico se utiliza `ng test --include="**\filename.spec.ts"` _

```
ng test --include="**\login.component.spec.ts"
```

## Despliegue

_ Para comilar el código fuente se ejecuta desde el CLI de Angular `ng build`, este comando genera un directorio de salida llamado dist / en la ruta de salida dada._

## Construido con

- [Angular](https://angular.io/docs) - Framework para aplicaciones web
- [WordPress](https://developer.wordpress.org/) - WordPress CMS (sistema de gestión de contenidos)
- [PrimeNG](https://www.primefaces.org/primeng/showcase/#/setup) - Angular UI Component Library

## Autores

- **Jhon Mora** - _Programador_ - [SebastianMora98](https://github.com/SebastianMora98)
- **Juan Alarcón** - _Programador_ - [JuanCAM98](https://github.com/JuanCAM98)

# Documentacion

_Se incluye compodoc como herramienta de documentacion, para generar la documentación se ejecuta el comando_

```
npm run compodoc
```

# Capturas de pantalla

## Sección de Información Institucional

![Screenshot_2020-09-28 Conoce Tu UPTC](https://user-images.githubusercontent.com/13090594/94512206-19612b80-01e1-11eb-8f99-bc6ebb7f11ba.jpg)
![Screenshot_2020-09-28 Conoce Tu UPTC](https://user-images.githubusercontent.com/13090594/94512253-34cc3680-01e1-11eb-9193-ffd99e54a2ba.png)

## Sección de Noticias

![Screenshot_2020-09-28 Conoce Tu UPTC(1)](https://user-images.githubusercontent.com/13090594/94512451-ac01ca80-01e1-11eb-80ad-4a611b8decea.png)
![Screenshot_2020-09-28 Conoce Tu UPTC(5)](https://user-images.githubusercontent.com/13090594/94512456-ae642480-01e1-11eb-94f5-a016fab051d2.png)
![Screenshot_2020-09-28 Conoce Tu UPTC(4)](https://user-images.githubusercontent.com/13090594/94512459-af955180-01e1-11eb-880f-df084d960d06.png)

## Sección de Autenticación

![Screenshot_2020-09-28 Conoce Tu UPTC(3)](https://user-images.githubusercontent.com/13090594/94512493-c63ba880-01e1-11eb-807e-1e6c8f2b73d3.png)
![Screenshot_2020-09-28 Conoce Tu UPTC(2)](https://user-images.githubusercontent.com/13090594/94512495-c6d43f00-01e1-11eb-9c85-8bf8441c0a3b.png)

## Sección de Foro

![Screenshot_2020-09-28 Foro – Foro Conoce Tu UPTC](https://user-images.githubusercontent.com/13090594/94512533-d94e7880-01e1-11eb-8767-b902f90b697c.png)

## Sección de Cuenta de usuario

![Screenshot_2020-09-28 Cuenta – Foro Conoce Tu UPTC](https://user-images.githubusercontent.com/13090594/94512534-d9e70f00-01e1-11eb-93d0-531da17cbb5d.png)

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
