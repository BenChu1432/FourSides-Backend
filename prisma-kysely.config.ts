import { defineConfig } from 'prisma-kysely';

export default defineConfig({
  schemaPath: './prisma/schema.prisma',
  outputPath: './src/kysely/kysely.types.ts',
});
