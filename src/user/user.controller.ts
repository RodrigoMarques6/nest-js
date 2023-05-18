import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { get } from 'http';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

        @Get()
        getAllUsers(): User[]{
            return this.userService.getAllUsers();
        }

        @Get(':id')
        getUserById(@Param('id') id:number): User{
            return this.userService.getUserById(id);
        }

        @Post()
        creatUser(@Body() user:User): User{
            return this.userService.creatuser(user);
        }

        @Put(':id')
        updateUser(@Param('id') id:number, @Body() user:User): User{
            return this.userService.updateUser(idm user);
        }

        @Delete(':id')
        deleteUser(@Param('id'): void{
            this.userService.deleteUser(id);
        }
    
}
