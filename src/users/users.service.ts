import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/schemas/user.schema';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(User.name) private readonly UserModel:Model<UserDocument>
    ){}

    async createUser(user:User):Promise<User>{
        return await this.UserModel.create({
            username:user.username,
            email:user.email,
            password:user.password
        })
    }

    async findOneUserByEmail(email: string):Promise<User>{
        const user =  await this.UserModel.findOne({email})
        if(!user) throw new NotAcceptableException("user must required..")
        return user
      }
}
