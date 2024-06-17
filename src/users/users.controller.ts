import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() // GET--> Get all users--> /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ADMIN' | 'ENGINEER') {
    return this.usersService.findAll(role);
  }

  @Get(':id') //GET--> Get a user--> /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(parseInt(id));
  }

  @Post() //POST--> Craete a new user--> /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id') //PATCH--> Update a user--> /users/:id
  update(
    @Param('id') id: string,
    @Body()
    updateUserDeatails: {
      name: string;
      email: string;
      role: 'INTERN' | 'ADMIN' | 'ENGINEER';
    },
  ) {
    return this.usersService.update(+id, updateUserDeatails);
  }

  @Delete(':id') //DELETE--> Delete a user--> /users/:id
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
