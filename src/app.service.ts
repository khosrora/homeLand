import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

    sendSms(){
        console.log("object");
    }

}