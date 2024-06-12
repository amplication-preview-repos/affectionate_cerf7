import { SortOrder } from "../../util/SortOrder";

export type CmsOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  pageTitle?: SortOrder;
  published?: SortOrder;
  updatedAt?: SortOrder;
};
