type JsonValue =
  | JsonObject
  | JsonValue[]
  | boolean
  | number
  | string
  | readonly JsonValue[]
  | null;

export type JsonObject = {
  [k: string]: JsonValue;
};
