import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CmsService } from "./cms.service";
import { CmsControllerBase } from "./base/cms.controller.base";

@swagger.ApiTags("cms")
@common.Controller("cms")
export class CmsController extends CmsControllerBase {
  constructor(protected readonly service: CmsService) {
    super(service);
  }
}
