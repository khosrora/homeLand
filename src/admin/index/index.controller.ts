import { Controller, Get, Req, Res } from '@nestjs/common';
import { Response, Request } from "express";
import { IndexService } from './index.service';

@Controller('/admin')
export class IndexController {

    constructor(
        private readonly indexService: IndexService
    ) { }

    @Get('home')
    HomePageAdmin(
        @Res() res: Response,
        @Req() req: Request
    ) {
        console.log(req.cookies)
        return res.render("pages/index.ejs", { message: "test" })
    }
}
