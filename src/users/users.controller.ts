import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(): string {
        return 'This action returns all users';
    }

    @Get('/byQuery')
    findByQuery(@Query('name') name: string): string {
        return `This action returns a user with name ${name}`;
    }

    @Get(':id')
    findOne(@Param('id') id: string): string {
        return `This action returns a #${id} user`;
    }

    @Post()
    create(@Body() createUserDto: any): string {
        return 'This action adds a new user';
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: any): string {
        return `This action updates a #${id} user`;
    }

    @Delete(':id')
    remove(@Param('id') id: string): string {
        return `This action removes a #${id} user`;
    }
}
