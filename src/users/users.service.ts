import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@gmail.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Jane Marrylyn',
      email: 'jane@gmail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'Carter Smith',
      email: 'smith@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 4,
      name: 'Marry Hitler',
      email: 'hitler@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Rahul Dua',
      email: 'rahul@gmail.com',
      role: 'ADMIN',
    },
  ];

  findAll(role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ADMIN' | 'ENGINEER';
  }) {
    const newUser = { id: this.users.length + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(
    id: number,
    updateUserDeatails: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    // This is will spread all the properties of the current user and the updateUserDeatails will just overwrite the required properties
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserDeatails };
    return this.users[userIndex];
  }

  delete(id: number) {
    const user = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return { ...user, message: 'User Deleted succesfully' };
  }
}
