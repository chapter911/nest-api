import { Injectable } from '@nestjs/common';

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
        return this.users.filter(user => user.role === role);
    }

    findOne(id: number) {
        return this.users.find(user => user.id === id);
    }

    create(user: any) {
        user.id = this.users.length + 1;
        this.users.push(user);
        return user;
    }

    update(id: number, user: any) {
        this.users = this.users.map(u => u.id === id ? {...u, ...user} : u);
        return this.findOne(id);
    }

    remove(id: number) {
        this.users = this.users.filter(user => user.id !== id);
        return {"message": `Deleted user #${id}`};
    }
}
