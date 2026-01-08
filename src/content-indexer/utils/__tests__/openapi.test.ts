import { describe, expect, test } from "vitest";

import { PathBuilder } from "@/content-indexer/core/path-builder";

import {
  buildOperationPath,
  extractOpenApiOperations,
  getOperationDescription,
  getOperationTitle,
} from "../openapi";

describe("openapi utils", () => {
  describe("extractOpenApiOperations", () => {
    test("should extract operations from paths", () => {
      const paths = {
        "/users": {
          get: {
            operationId: "getUsers",
            tags: ["users"],
          },
          post: {
            operationId: "createUser",
            tags: ["users"],
          },
        },
      };

      const operations = extractOpenApiOperations(paths);
      expect(operations).toHaveLength(2);
      expect(operations[0].operationId).toBe("getUsers");
      expect(operations[0].method).toBe("GET");
      expect(operations[1].operationId).toBe("createUser");
      expect(operations[1].method).toBe("POST");
    });

    test("should handle operation without explicit operationId", () => {
      const paths = {
        "/users": {
          get: {
            summary: "Get all users",
          },
        },
      };

      const operations = extractOpenApiOperations(paths);
      expect(operations).toHaveLength(1);
      expect(operations[0].operationId).toBe("Get all users");
    });

    test("should generate operationId from method and path if missing", () => {
      const paths = {
        "/users/{id}": {
          get: {},
        },
      };

      const operations = extractOpenApiOperations(paths);
      expect(operations).toHaveLength(1);
      expect(operations[0].operationId).toBe("get_/users/{id}");
    });

    test("should extract first tag from tags array", () => {
      const paths = {
        "/users": {
          get: {
            operationId: "getUsers",
            tags: ["users", "admin", "v2"],
          },
        },
      };

      const operations = extractOpenApiOperations(paths);
      expect(operations[0].tag).toBe("users");
    });

    test("should handle operation without tags", () => {
      const paths = {
        "/users": {
          get: {
            operationId: "getUsers",
          },
        },
      };

      const operations = extractOpenApiOperations(paths);
      expect(operations[0].tag).toBeUndefined();
    });

    test("should skip non-HTTP method properties", () => {
      const paths = {
        "/users": {
          get: {
            operationId: "getUsers",
          },
          parameters: [], // Not an HTTP method
          description: "Users endpoint", // Not an HTTP method
        },
      };

      const operations = extractOpenApiOperations(paths);
      expect(operations).toHaveLength(1);
    });

    test("should handle multiple paths", () => {
      const paths = {
        "/users": {
          get: { operationId: "getUsers" },
        },
        "/posts": {
          get: { operationId: "getPosts" },
          post: { operationId: "createPost" },
        },
      };

      const operations = extractOpenApiOperations(paths);
      expect(operations).toHaveLength(3);
    });

    test("should handle empty paths object", () => {
      const operations = extractOpenApiOperations({});
      expect(operations).toEqual([]);
    });
  });

  describe("getOperationTitle", () => {
    test("should return summary if available", () => {
      const spec = {
        paths: {
          "/users": {
            get: {
              operationId: "getUsers",
              summary: "Get All Users",
            },
          },
        },
      };

      const title = getOperationTitle(spec, "getUsers", "/users");
      expect(title).toBe("Get All Users");
    });

    test("should fallback to operationId if no summary", () => {
      const spec = {
        paths: {
          "/users": {
            get: {
              operationId: "getUsers",
            },
          },
        },
      };

      const title = getOperationTitle(spec, "getUsers", "/users");
      expect(title).toBe("getUsers");
    });

    test("should return operationId if path not found", () => {
      const spec = {
        paths: {},
      };

      const title = getOperationTitle(spec, "getUsers", "/users");
      expect(title).toBe("getUsers");
    });

    test("should return operationId if operation not found in path", () => {
      const spec = {
        paths: {
          "/users": {
            post: {
              operationId: "createUser",
              summary: "Create User",
            },
          },
        },
      };

      const title = getOperationTitle(spec, "getUsers", "/users");
      expect(title).toBe("getUsers");
    });
  });

  describe("getOperationDescription", () => {
    test("should return description if available", () => {
      const spec = {
        paths: {
          "/users": {
            get: {
              description: "Retrieves all users from the system",
            },
          },
        },
      };

      const description = getOperationDescription(spec, "/users", "get");
      expect(description).toBe("Retrieves all users from the system");
    });

    test("should return empty string if path not found", () => {
      const spec = {
        paths: {},
      };

      const description = getOperationDescription(spec, "/users", "get");
      expect(description).toBe("");
    });

    test("should return empty string if method not found", () => {
      const spec = {
        paths: {
          "/users": {
            post: {
              description: "Create user",
            },
          },
        },
      };

      const description = getOperationDescription(spec, "/users", "get");
      expect(description).toBe("");
    });

    test("should return empty string if description not present", () => {
      const spec = {
        paths: {
          "/users": {
            get: {
              operationId: "getUsers",
            },
          },
        },
      };

      const description = getOperationDescription(spec, "/users", "get");
      expect(description).toBe("");
    });
  });

  describe("buildOperationPath", () => {
    test("should build path without tag", () => {
      const builder = PathBuilder.init("reference/api");
      const path = buildOperationPath(builder, "getUsers", undefined);

      expect(path).toBe("reference/api/get-users");
    });

    test("should build path with tag", () => {
      const builder = PathBuilder.init("reference/api");
      const path = buildOperationPath(builder, "getUsers", "users");

      expect(path).toBe("reference/api/users/get-users");
    });

    test("should kebab-case operationId", () => {
      const builder = PathBuilder.init("reference");
      const path = buildOperationPath(builder, "getUsersById", undefined);

      expect(path).toBe("reference/get-users-by-id");
    });

    test("should kebab-case tag", () => {
      const builder = PathBuilder.init("reference");
      const path = buildOperationPath(builder, "getUsers", "User Management");

      expect(path).toBe("reference/user-management/get-users");
    });

    test("should handle empty base path", () => {
      const builder = PathBuilder.init();
      const path = buildOperationPath(builder, "getUsers", "users");

      expect(path).toBe("users/get-users");
    });
  });
});
