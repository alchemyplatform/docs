export type AuthParamLocation = "path" | "header" | "query";

export interface AuthParameter {
  name: string;
  in: AuthParamLocation;
  schema: {
    type: string;
    default?: string;
    description?: string;
  };
  required: boolean;
}
