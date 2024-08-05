"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActividadesServicios = void 0;
const common_1 = require("@nestjs/common");
let ActividadesServicios = class ActividadesServicios {
    constructor() {
        this.ActividadesLocalidadesBogota = {
            Usaquen: {
                culturales: [
                    "Mercado de las Pulgas",
                    "Hacienda Santa Bárbara",
                    "Parque de Usaquén",
                ],
                salud: ["Ciclovía Usaquén", "Parque El Country", "Club de Golf"],
                saliracomer: ["Zona G", "Restaurantes en Usaquén", "Bares en Usaquén"],
            },
            Chapinero: {
                culturales: [
                    "Museo del Chicó",
                    "Teatro Nacional Fanny Mikey",
                    "Galería Casa Cuadrada",
                ],
                salud: [
                    "Gimnasios en Chapinero",
                    "Parque de los Hippies",
                    "Ciclovía Chapinero",
                ],
                saliracomer: ["Zona T", "Andrés Carne de Res", "Bares en la Zona Rosa"],
            },
        };
    }
    getListaActividades() {
        return [
            { nombre: "Salir a Comer", key: "saliracomer" },
            { nombre: "Culturales", key: "culturales" },
            { nombre: "Salud", key: "salud" },
        ];
    }
    buscarActividades(localidad, tipoActividad) {
        if (this.ActividadesLocalidadesBogota[localidad]) {
            if (this.ActividadesLocalidadesBogota[localidad][tipoActividad]) {
                return this.ActividadesLocalidadesBogota[localidad][tipoActividad];
            }
            else {
                return `No hay actividades de tipo ${tipoActividad} en ${localidad}.`;
            }
        }
        else {
            return `La localidad ${localidad} no está en la lista.`;
        }
    }
    getActividadesDatos(nombre, actividad) {
        nombre = nombre.replace(/^:/, "");
        actividad = actividad.replace(/^:/, "");
        const localidad = this.buscarActividades(nombre, actividad);
        if (!localidad) {
            throw new Error(`Localidad con nombre ${nombre} no encontrada`);
        }
        return localidad;
    }
};
exports.ActividadesServicios = ActividadesServicios;
exports.ActividadesServicios = ActividadesServicios = __decorate([
    (0, common_1.Injectable)()
], ActividadesServicios);
//# sourceMappingURL=actividades.service.js.map