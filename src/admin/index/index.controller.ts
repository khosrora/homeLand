import { Controller, Get, Res } from '@nestjs/common';
import { Response } from "express";
import { IndexService } from './index.service';

@Controller('/admin')
export class IndexController {

    constructor(
        private readonly indexService: IndexService
    ) { }

    @Get('home')
    HomePageAdmin(
        @Res() res: Response
    ) {
        return res.render("pages/index.ejs", {  message: "test" })
    }
}
