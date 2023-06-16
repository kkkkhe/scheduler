import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class TaskService {
  constructor(private prismaService: PrismaService) {}
  findMany({ id }: Prisma.taskWhereInput) {
    const tasks = this.prismaService.task.findMany({
      where: {
        user_id: id,
      },
    });
    return tasks;
  }
  createOne(data: Prisma.taskCreateInput) {
    const task = this.prismaService.task.create({
      data,
    });
    return task;
  }
}