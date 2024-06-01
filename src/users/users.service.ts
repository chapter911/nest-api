import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private users = [
        {
            id        : 1,
            name      : 'John Doe',
            email     : 'john@example.com',
            role      : 'admin',
        },
        {
            id        : 2,
            name      : 'Jane Smith',
            email     : 'jane@example.com',
            role      : 'user',
        },
        {
            id        : 3,
            name      : 'Bob Johnson',
            email     : 'bob@example.com',
            role      : 'user',
        },
        {
            id        : 4,
            name      : 'Alice Lee',
            email     : 'alice@example.com',
            role      : 'user',
        },
        {
            id        : 5,
            name      : 'Michael Brown',
            email     : 'michael@example.com',
            role      : 'admin',
        },
    ];

    findAll() {
        return this.users;
    }

    findByQuery(role: string) {
        const user = this.users.filter(user => user.role === role);
        if(user.length === 0) {
            throw new NotFoundException('Role not found');
        }
        return user;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return this.users.find(user => user.id === id);
    }

    create(createUserDto: CreateUserDto) {
        const userWithId = {...createUserDto, id: this.users.length + 1};
        this.users.push(userWithId);
        return userWithId;
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(u => u.id === id ? {...u, ...updateUserDto} : u);
        return this.findOne(id);
    }

    remove(id: number) {
        this.users = this.users.filter(user => user.id !== id);
        return {"message": `Deleted user #${id}`};
    }
}
