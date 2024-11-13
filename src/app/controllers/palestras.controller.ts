import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { PalestrasService } from "../services/palestras.service";
import { Palestra } from "../domain/palestra.entity";

@Controller('/palestras')
export class PalestraController {

    constructor(
        private readonly palestrasService: PalestrasService
    ) {}

    @Get()
    getPalestras(): Promise<Palestra[]> {
        return this.palestrasService.getPalestras();
    }

    @Get(':id')
    getPalestra(@Param('id') id: string): Promise<Palestra> {
        const palestraId = parseInt(id)
        return this.palestrasService.getPalestra(palestraId);
    }

    @Post()
    createPalestras(@Body() palestra: Palestra): Promise<Palestra> {
        return this.palestrasService.createPalestras(palestra);
    }

    @Put(':id')
    updatePalestras(@Param('id') id: string, 
    @Body() palestra: any): Promise<Palestra> {
        const palestraId = parseInt(id);
        return this.palestrasService.updatePalestras(
            palestraId,
            palestra
        );
    }

    @Delete(':id')
    deletePalestras(@Param('id') id: string): Promise<void> {
        const palestraId = parseInt(id);
        return this.palestrasService.deletePalestra(palestraId);
    }
}