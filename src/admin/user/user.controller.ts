import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express'
import { UserService } from './user.service';

@Controller('/admin')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }


    @Get('login')
    adminLogin(
        @Res() res: Response
    ) {
        // return res.render('./pages/login', { layout: 'layout/userLayout.ejs', message: 'Hello World' });
    }


}
