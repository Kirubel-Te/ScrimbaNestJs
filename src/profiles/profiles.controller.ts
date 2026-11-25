import { Controller, Get , Query, Param, Post, Body , Put , Delete, HttpCode,  HttpStatus} from '@nestjs/common';
import { createProfileDto } from './dto/create-profile.dto.js';
import { updateProfileDto } from './dto/update-profile.dto.js'
import { ProfilesService } from './profiles.service.js'


@Controller('profiles')
export class ProfilesController {

    constructor(private profilesService: ProfilesService){}

    @Get()
    findAll(){
        return this.profilesService.findAll()
    }

    @Get(':id')
    findOne(@Param("id") id:string){
        return this.profilesService.findById(id)
    }

    @Post()
    create(@Body() createProfileDto:createProfileDto){
        return this.profilesService.createProfile(createProfileDto)
    }

    @Put(':id')
    update(@Param("id") id:string, @Body() updateProfileDto:updateProfileDto){
        return this.profilesService.updateProfile(updateProfileDto, id)
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param("id") id:string ){
        return this.profilesService.DeleteProfile(id)
    }

}
