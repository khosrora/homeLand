import { Matches, IsString, Min } from "class-validator";



export class getOtpDTO {
    @Matches(/^09(1[0-9]|3[0-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/, { message: "phone must a valid phone number" })
    @IsString({ message: "phone number field must be a string" })
    phoneNumber: string;
    codeOtp: number;
}

export class checkOtpDTO {
    @Matches(/^09(1[0-9]|3[0-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/, { message: "phone must a valid phone number" })
    @IsString({ message: "phone number field must be a string" })
    phoneNumber: string;
    @Min(5)
    codeOtp: number;
}