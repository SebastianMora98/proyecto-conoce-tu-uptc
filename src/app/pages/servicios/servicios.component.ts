import { Component, OnInit } from '@angular/core';

interface MenuItem {
  label: string;
  items: items[];
}
interface items {
  label: string;
  icon: string;
  url?: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  items: MenuItem[];

  externalLinkIcon: string = 'pi pi-external-link';
  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Internos',
        items: [
          {
            label: 'Relaciones Internacionales',
            icon: this.externalLinkIcon,
            url: 'http://www.uptc.edu.co/relaciones_internacionales/',
          },
          {
            label: 'Departamento de Servicios Docente Asistenciales',
            icon: this.externalLinkIcon,
            url:
              'http://www.uptc.edu.co/servicios/serv_docentes_asistenciales/index.html',
          },
          {
            label: 'Turnitin',
            icon: this.externalLinkIcon,
            url: 'http://www.uptc.edu.co/servicios/serv_internos/index.html',
          },
          {
            label: 'Unisalud',
            icon: this.externalLinkIcon,
            url: 'http://www.uptc.edu.co/unisalud_uptc/index.html',
          },
        ],
      },
      {
        label: 'Externos',
        items: [
          {
            label: 'Centro de Atención Psicopedagógica – CAP',
            icon: this.externalLinkIcon,
            url:
              'http://www.uptc.edu.co/facultades/f_educacion/pregrado/psicopedagogia/inf_adicional/cap/index.html',
          },
          {
            label:
              'Centro de Diagnóstico Vegetal del Centro Oriente Colombiano',
            icon: this.externalLinkIcon,
            url:
              'http://www.uptc.edu.co/facultades/f_agropecuarias/pregrado/agronomia/inf_adicional/centro_diag/',
          },
          {
            label: 'Centros de Gestión de Investigación y Extensión',
            icon: this.externalLinkIcon,
            url: 'http://www.uptc.edu.co/vie/extension/centro_gestion',
          },
          {
            label: 'Clínica Veterinaria',
            icon: this.externalLinkIcon,
            url:
              'http://www.uptc.edu.co/direccion_extension/serv_docent_asistenciales/clin_veterinaria/',
          },
          {
            label: 'Extensión Universitaria',
            icon: this.externalLinkIcon,
            url: 'http://www.uptc.edu.co/vie/extension/index.html',
          },
          {
            label: 'Granja Tunguavita',
            icon: this.externalLinkIcon,
            url:
              'http://www.uptc.edu.co/export/sites/default/institucional/servicios/doc/porta_granja_tunguvita2019.pdf',
          },
          {
            label: 'Graduados',
            icon: this.externalLinkIcon,
            url: 'http://www.uptc.edu.co/enlaces/portal/graduados',
          },
          {
            label: 'INCITEMA',
            icon: this.externalLinkIcon,
            url: 'http://www.uptc.edu.co/enlaces/incitema/',
          },
          {
            label:
              'Instituto de Investigación y Desarrollo en Movilidad y transportei-MOVyT',
            icon: this.externalLinkIcon,
            url:
              'http://www.uptc.edu.co/direccion_investigaciones/inst_investigacion/imovyt',
          },
          {
            label: 'IRME',
            icon: this.externalLinkIcon,
            url:
              'http://www.uptc.edu.co/direccion_investigaciones/inst_investigacion/irme/index.html',
          },
          {
            label: 'Laboratorios',
            icon: this.externalLinkIcon,
            url:
              'http://www.uptc.edu.co/export/sites/default/institucional/servicios/doc/laboratorios_uptc2019.pdf',
          },
          {
            label:
              'Laboratorio Clínico de la Clínica Veterinaria de Pequeños y Grandes Animales',
            icon: this.externalLinkIcon,
            url:
              'http://www.uptc.edu.co/direccion_extension/serv_docent_asistenciales/lab_clinico/index.html',
          },
          {
            label: 'Laboratorios de Nutrición Animal',
            icon: this.externalLinkIcon,
            url:
              'http://www.uptc.edu.co/facultades/f_agropecuarias/pregrado/veterinaria/inf_adicional/Servicios/',
          },
          {
            label: 'Laboratorio de Suelos y Aguas, Servicio a la Comunidad',
            icon: this.externalLinkIcon,
            url:
              'http://www.uptc.edu.co/facultades/f_agropecuarias/pregrado/agronomia/inf_adicional/Servicios/lab_suelos_agua_agro',
          },
          {
            label: 'Unidad de Apoyo al Aprendizaje de las Matemáticas - UAAM',
            icon: this.externalLinkIcon,
            url: 'http://www.uptc.edu.co/servicios/uaam/index.html',
          },
        ],
      },
      {
        label: 'Gestión Social',
        items: [
          {
            label: 'Casa de la Mujer',
            icon: this.externalLinkIcon,
            url: 'http://www.uptc.edu.co/direccion_extension/gestion_social/',
          },
          {
            label: 'Consultorio Jurídico',
            icon: this.externalLinkIcon,
            url:
              'http://www.uptc.edu.co/direccion_extension/serv_docent_asistenciales/cons_juridico/index.html',
          },
        ],
      },
    ];
  }
}
