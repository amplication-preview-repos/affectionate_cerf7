import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type DocumentWhereInput = {
  description?: StringNullableFilter;
  file?: JsonFilter;
  id?: StringFilter;
  title?: StringNullableFilter;
  uploadedBy?: StringNullableFilter;
};
