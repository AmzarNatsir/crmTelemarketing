import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)   // 🔒 hanya bisa diakses kalau sudah login
  @Get()
  async getAllUsers() {
    return this.userService.findAll();
  }

  @Get(":id")
  async findById(@Param('id') id: string) {
    return this.userService.findById(Number(id));
  }
}
