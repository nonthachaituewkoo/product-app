import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Keyboard' })
  name: string;

  @ApiProperty({ example: 1500 })
  price: number;

  @ApiProperty({ example: 100 })
  stock: number;
}
