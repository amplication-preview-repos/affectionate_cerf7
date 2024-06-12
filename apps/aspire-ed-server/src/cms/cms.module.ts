import { Module } from "@nestjs/common";
import { CmsModuleBase } from "./base/cms.module.base";
import { CmsService } from "./cms.service";
import { CmsController } from "./cms.controller";
import { CmsResolver } from "./cms.resolver";

@Module({
  imports: [CmsModuleBase],
  controllers: [CmsController],
  providers: [CmsService, CmsResolver],
  exports: [CmsService],
})
export class CmsModule {}
