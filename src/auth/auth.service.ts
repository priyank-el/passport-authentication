import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}
    
    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOneUserByEmail(email);
        if (user && user.password === pass) return user;
        return null;
    }
}
