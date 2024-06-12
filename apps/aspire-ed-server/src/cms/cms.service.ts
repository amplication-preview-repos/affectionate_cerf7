import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CmsServiceBase } from "./base/cms.service.base";

@Injectable()
export class CmsService extends CmsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
