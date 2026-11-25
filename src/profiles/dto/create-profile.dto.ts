import {IsString, Length} from 'class-validator'

export class createProfileDto {
    @IsString()
    @Length(3, 100)
    name:string

    @IsString()
    description: string
}