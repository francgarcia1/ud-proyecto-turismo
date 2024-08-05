import { CiudadServicio } from "./ciudad.service";
export declare class CiudadController {
    ciudadService: CiudadServicio;
    constructor(ciudadService: CiudadServicio);
    getAllCites(): string[];
    getCitiesFacts(nombre: string): {
        nombre: string;
        mapa: string;
        imagenRef: string;
        info: string;
    };
}
