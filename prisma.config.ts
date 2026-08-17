import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "app/prisma/schema.prisma",
  datasource: {
    url: "file:./dev.db",
  },
});
