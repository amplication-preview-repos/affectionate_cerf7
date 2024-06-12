import { JsonValue } from "type-fest";

export type Document = {
  createdAt: Date;
  description: string | null;
  file: JsonValue;
  id: string;
  title: string | null;
  updatedAt: Date;
  uploadedBy: string | null;
};
