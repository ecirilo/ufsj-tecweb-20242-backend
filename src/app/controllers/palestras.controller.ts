import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PalestrasService } from "../services/palestras.service";

@Controller('/palestras')
export class PalestraController {

    constructor(
        private readonly palestrasService: PalestrasService
    ) {}

    @Get()
    getPalestras() {
        return this.palestrasService.getPalestras();
    }

    @Get(':id')
    getPalestra(@Param('id') id: string) {
        const palestraId = parseInt(id)
        return this.palestrasService.getPalestra(palestraId);
    }

    @Post()
    createPalestras(@Body() palestra: any) {
        return this.palestrasService.createPalestras(palestra);
    }

    @Put(':id')
    updatePalestras(@Param('id') id: string, 
    @Body() palestra: any) {
        const palestraId = parseInt(id);
        return this.palestrasService.updatePalestras(
            palestraId,
            palestra
        );
    }

    @Delete(':id')
    deletePalestras(@Param('id') id: string) {
        const palestraId = parseInt(id);
        return this.palestrasService.deletePalestras(palestraId);
    }
}