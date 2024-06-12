import { Cms as TCms } from "../api/cms/Cms";

export const CMS_TITLE_FIELD = "pageTitle";

export const CmsTitle = (record: TCms): string => {
  return record.pageTitle?.toString() || String(record.id);
};
