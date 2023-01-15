import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { checkOtpDTO, getOtpDTO } from './DTO/auth.DTO';


@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ) { }

    @Post('get_otp')
    getOtp(
        @Body() body: getOtpDTO
    ) {
        return this.authService.getOtp(body)
    }

    @Post('check_otp')
    checkOtp(
        @Body() body: checkOtpDTO
    ) {
        return this.authService.checkOtp(body)
    }

}