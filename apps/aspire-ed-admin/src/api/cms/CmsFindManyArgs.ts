import { CmsWhereInput } from "./CmsWhereInput";
import { CmsOrderByInput } from "./CmsOrderByInput";

export type CmsFindManyArgs = {
  where?: CmsWhereInput;
  orderBy?: Array<CmsOrderByInput>;
  skip?: number;
  take?: number;
};
