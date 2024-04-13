import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/api/base/base.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticlesService extends BaseService {
  constructor(private readonly prisma: PrismaService) {
    super(prisma.article, { category: true });
  }

  /**
   * 根据id获取一个
   * @param id
   * @returns
   */
  async findOne(id: string, include = null) {
    include = include || this.includes;
    await this.prisma.article.update({
      data: {
        // 每一次获取详情的时候都对浏览次数做加一处理
        views: {
          increment: 1,
        },
      },
      where: {
        id,
      },
    });
    return this.model.findUnique({
      where: {
        id,
      },
      include,
    });
  }
}
