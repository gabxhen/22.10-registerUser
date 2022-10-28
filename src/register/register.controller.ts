import { Controller, Post, Body,HttpException, HttpStatus} from '@nestjs/common';
import { RegisterService } from './register.service';

@Controller('register')
export class RegisterController {
    constructor(private readonly registerService: RegisterService){}

    @Post()
    async registerUser(@Body() req){
        const {name, email, password, site, phone} = req

        if(!name){
            throw new HttpException('O nome não foi encontrado', HttpStatus.FORBIDDEN);
        }

        return this.registerService.registerUser(name, email, password, site, phone);
    }


}
