import { Controller, Get , Query, Param, Post, Body , Put , Delete, HttpCode,  HttpStatus} from '@nestjs/common';
import { createProfileDto } from './dto/create-profile.dto.js';
import { updateProfileDto } from './dto/update-profile.dto.js'


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

    @Put(':id')
    update(@Param("id") id:string, @Body() updateProfileDto:updateProfileDto){
        return {
            id: id,
            name: updateProfileDto.name,
            description: updateProfileDto.description
        }
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    remove(@Param("id") id:string ){
        return {id:id}
    }

}
