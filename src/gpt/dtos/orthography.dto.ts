import { IsString, IsNotEmpty, IsNumber, IsIn, IsOptional, IsInt } from 'class-validator';

export class OrthographyDto {
    
    @IsString()
    @IsNotEmpty()
    readonly prompt: string;

    @IsInt()
    @IsOptional()
    readonly maxTokens: number;


}
