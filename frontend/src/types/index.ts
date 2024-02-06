import { InferType } from "yup";

import { authSchema } from "../components";

export type AuthSchemaProps = InferType<typeof authSchema>;

export interface AuthListProps {
  label: string;
  type: string;
  name: string;
  id: string;
  autocomplete?: string;
}
