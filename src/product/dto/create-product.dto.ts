import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    @ApiProperty()
    title:string;
    
    @ApiProperty()
    image:string;

    @ApiProperty()
    likes:number
}
