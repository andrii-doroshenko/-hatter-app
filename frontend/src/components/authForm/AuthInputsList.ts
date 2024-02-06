import { AuthListProps } from "../../types";

export const AuthList: Array<AuthListProps> = [
  { label: "Username", type: "text", name: "username", id: "username" },
  { label: "Password", type: "password", name: "secret", id: "secret" },
  { label: "Email", type: "email", name: "email", id: "email" },
  {
    label: "First name",
    type: "text",
    name: "first_name",
    id: "first_name",
  },
  {
    label: "Last name",
    type: "text",
    name: "last_name",
    id: "last_name",
  },
];
