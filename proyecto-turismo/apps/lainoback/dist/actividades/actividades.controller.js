"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActividadesController = void 0;
const common_1 = require("@nestjs/common");
const actividades_service_1 = require("./actividades.service");
let ActividadesController = class ActividadesController {
    constructor(actividadesService) {
        this.actividadesService = actividadesService;
    }
    getActividades() {
        return this.actividadesService.getListaActividades();
    }
    getActividadesDatos(nombre, actividad) {
        return this.actividadesService.getActividadesDatos(nombre, actividad);
    }
};
exports.ActividadesController = ActividadesController;
__decorate([
    (0, common_1.Get)("/actividades"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActividadesController.prototype, "getActividades", null);
__decorate([
    (0, common_1.Get)("/actividadesDatos/:nombre/:actividad"),
    __param(0, (0, common_1.Param)("nombre")),
    __param(1, (0, common_1.Param)("actividad")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], ActividadesController.prototype, "getActividadesDatos", null);
exports.ActividadesController = ActividadesController = __decorate([
    (0, common_1.Controller)({}),
    __metadata("design:paramtypes", [actividades_service_1.ActividadesServicios])
], ActividadesController);
//# sourceMappingURL=actividades.controller.js.map