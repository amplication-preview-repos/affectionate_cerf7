import * as graphql from "@nestjs/graphql";
import { CmsResolverBase } from "./base/cms.resolver.base";
import { Cms } from "./base/Cms";
import { CmsService } from "./cms.service";

@graphql.Resolver(() => Cms)
export class CmsResolver extends CmsResolverBase {
  constructor(protected readonly service: CmsService) {
    super(service);
  }
}
