import { Controller, Get , Query, Param, Post, Body } from '@nestjs/common';
import { createProfileDto } from './dto/create-profile.dto.js';

@Controller('profiles')
export class ProfilesController {

    @Get()
    findAll(@Query("location")location:String){
        return [{"location":location}]
    }

    @Get(':id')
    findOne(@Param("id") id:String){
        return { "id":id }
    }

    @Post()
    create(@Body() createProfileDto:createProfileDto){
        return { name:createProfileDto.name, description:createProfileDto.description }
    }

}
