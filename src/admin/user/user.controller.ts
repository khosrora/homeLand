import { Controller, Get, Res, Post, Body } from '@nestjs/common';
import { Response } from 'express'
import { UserAdminDTO } from './DTO/user.Dto';
import { UserService } from './user.service';

@Controller('/admin')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }


    @Get('login')
    adminLoginGet(
        @Res() res: Response
    ) {
        return res.render('./pages/login', { layout: 'layout/userLayout.ejs', message: 'Hello World' });
    }

    @Post('login')
    adminLoginPost(
        @Res() res: Response,
        @Body() body: UserAdminDTO
    ) {
        // res.cookie('test', 'test', {
        //     maxAge: 86400 * 1000, // 24 hours
        //     httpOnly: true, // http only, prevents JavaScript cookie access
        //     secure: true // cookie must be sent over https / ssl
        // });
        return res.render("pages/index.ejs", { message: "test" })
    }


}
