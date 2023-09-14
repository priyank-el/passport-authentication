import { Body, Controller, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/schemas/user.schema';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Post('create')
    async createUser(@Res() response, @Body() user: User) {
        const registerUser = await this.userService.createUser(user)

        return response
            .status(HttpStatus.CREATED)
            .json({ message: "User created.." })
    }


    @UseGuards(AuthGuard('local'))
    @Post('/login')
    async login(@Req() req) {
        console.log(req);
        return req.user;
    }
}
