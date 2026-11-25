import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { createProfileDto } from './dto/create-profile.dto.js'
import { updateProfileDto } from './dto/update-profile.dto.js'

@Injectable()
export class ProfilesService {
    private profiles = [
    {
      id: randomUUID(),
      name: 'Brianna Watts',
      description: `Looking for someone to merge with my heart. I’m a full-stack romantic who refactors my feelings until they pass all tests. Bonus points if you can debug my issues while we pair program over coffee. Let’s commit to something beautiful together.`
    },
    {
      id: randomUUID(),
      name: 'Jasper Quinn',
      description: `Seeking a partner in crime to compile my heart. Must be comfortable with the terminal because I only speak fluent bash. Swipe right if you can appreciate a good kernel panic every now and then.`
    },
    {
      id: randomUUID(),
      name: 'Leo Park',
      description: `You think you know VIM? Try Neovim. I'll make your modal dreams come true. Want to escape the matrix and explore the perfect keyboard shortcut for love?`
    },
  ];

    findAll(){
        return this.profiles
    }

    findById(id:string){
        return this.profiles.find(profile => profile.id === id)
    }

    createProfile(createProfileDto:createProfileDto){
        const newProfile = {
            id: randomUUID(),
            name:createProfileDto.name,
            description:createProfileDto.description
        }

        this.profiles.push(newProfile)
        return newProfile
    }

    updateProfile(updateProfileDto:updateProfileDto, id:string){
        const profileIndex = this.profiles.findIndex(profile => profile.id ===id)
        if (profileIndex !== -1){
            this.profiles[profileIndex] = { ...this.profiles[profileIndex], name:updateProfileDto.name, description:updateProfileDto.description}
            return this.profiles[profileIndex]
        }
        return null
    }

    DeleteProfile(id:string){
        const profileIndex = this.profiles.findIndex(profile => profile.id === id)
        if(profileIndex !== -1){
            this.profiles.splice(profileIndex, 1)
            return true
        }
        return false
    }
}
