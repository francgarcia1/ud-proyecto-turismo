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
exports.CiudadController = void 0;
const common_1 = require("@nestjs/common");
const ciudad_service_1 = require("./ciudad.service");
let CiudadController = class CiudadController {
    constructor(ciudadService) {
        this.ciudadService = ciudadService;
    }
    getAllCites() {
        return this.ciudadService.getLocalidad();
    }
    getCitiesFacts(nombre) {
        try {
            const result = this.ciudadService.getLocalidadesDatos(nombre);
            return result;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, common_1.HttpStatus.NOT_FOUND);
        }
    }
};
exports.CiudadController = CiudadController;
__decorate([
    (0, common_1.Get)("/localidades"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CiudadController.prototype, "getAllCites", null);
__decorate([
    (0, common_1.Get)("/localidadesDatos/:nombre"),
    __param(0, (0, common_1.Param)("nombre")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CiudadController.prototype, "getCitiesFacts", null);
exports.CiudadController = CiudadController = __decorate([
    (0, common_1.Controller)({}),
    __metadata("design:paramtypes", [ciudad_service_1.CiudadServicio])
], CiudadController);
//# sourceMappingURL=ciudad.controller.js.map