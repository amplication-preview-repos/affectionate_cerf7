import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";

export type CmsWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  pageTitle?: StringNullableFilter;
  published?: BooleanNullableFilter;
};
