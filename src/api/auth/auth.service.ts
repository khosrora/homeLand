import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { checkOtpDTO, getOtpDTO } from './DTO/auth.DTO';
import * as jwt from 'jsonwebtoken'
import { User } from '@prisma/client';

@Injectable()
export class AuthService {

    constructor(
        private readonly prismaService: PrismaService
    ) { }

    async getOtp(body: getOtpDTO) {
        const { phoneNumber } = body;
        const user = await this.findUniqueUser(phoneNumber);
        if (user === null) return this.registerUser(phoneNumber);
        if (user) return this.loginUser(user)
    }

    async checkOtp(body: checkOtpDTO) {
        const { phoneNumber, codeOtp } = body;
        const user = await this.findUniqueUser(phoneNumber);
        if (!user) return new HttpException("please register first", HttpStatus.BAD_REQUEST);
        const checkCode = await this.checkOtpCode(user, codeOtp);
        if (checkCode) {
            await this.prismaService.user.update({
                where: { phoneNumber },
                data: { codeOtp: Math.floor(100000 + Math.random() * 900000) }
            })
            const token = await this.createToken(user);
            return new HttpException({ token }, HttpStatus.OK)
        }
    }


    async findUniqueUser(phoneNumber: string) {
        return await this.prismaService.user.findUnique({
            where: {
                phoneNumber
            }
        })
    }

    async registerUser(phoneNumber: string) {
        const user = await this.prismaService.user.create({
            data: {
                phoneNumber,
                codeOtp: Math.floor(100000 + Math.random() * 900000)
            }
        })
        this.sendOtp(user)
        return new HttpException("user is created", HttpStatus.CREATED);
    }

    async loginUser(user) {
        this.sendOtp(user);
        return new HttpException("otp code is sending", HttpStatus.OK);
    }

    async sendOtp(user: object) {
        //! #TODO send sms
        // * send sms to user {phone and code}
        console.log(user);
    }

    async createToken(user: object) {
        var token = await jwt.sign(user, process.env.JWT_TOKEN);
        return token;
    }

    async checkOtpCode(user: User, code: number) {
        const { codeOtp } = user;
        if (codeOtp === code) return true
        throw new HttpException("not a valid user", HttpStatus.BAD_REQUEST)
    }

}
