import { ActividadesServicios } from "./actividades.service";
export declare class ActividadesController {
    private actividadesService;
    constructor(actividadesService: ActividadesServicios);
    getActividades(): {
        nombre: string;
        key: string;
    }[];
    getActividadesDatos(nombre: string, actividad: string): any;
}
