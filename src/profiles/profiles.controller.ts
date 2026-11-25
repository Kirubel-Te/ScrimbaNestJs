import { Controller, Get , Param, Post, Body , Put , Delete, HttpCode,  HttpStatus, ParseUUIDPipe , UseGuards} from '@nestjs/common';
import { createProfileDto } from './dto/create-profile.dto.js';
import { updateProfileDto } from './dto/update-profile.dto.js'
import { ProfilesService } from './profiles.service.js'
import type { UUID } from 'crypto'
import { ProfilesGuard } from './profiles.guard.js'


@Controller('profiles')
export class ProfilesController {

    constructor(private profilesService: ProfilesService){}

    @Get()
    findAll(){
        return this.profilesService.findAll()
    }

    @Get(':id')
    findOne(@Param("id", ParseUUIDPipe) id:UUID){
        return this.profilesService.findById(id)
    }

    @Post()
    create(@Body() createProfileDto:createProfileDto){
        return this.profilesService.createProfile(createProfileDto)
    }

    @Put(':id')
    update(@Param("id", ParseUUIDPipe) id:UUID, @Body() updateProfileDto:updateProfileDto){
        return this.profilesService.updateProfile(updateProfileDto, id)
    }

    @Delete(':id')
    @UseGuards(ProfilesGuard)
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param("id", ParseUUIDPipe) id:UUID ){
        return this.profilesService.DeleteProfile(id)
    }

}
