# Migration `20200624171734-name-added`

This migration has been generated at 6/24/2020, 5:17:34 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."User" ADD COLUMN "name" text  NOT NULL ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200624163342-init..20200624171734-name-added
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "postgres"
-  url = "***"
+  url      = "postgresql://postgres:postgres@localhost:5435/postgres"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -13,6 +13,7 @@
 // TODO: Please remove the following example:
 model User {
   id       Int     @id @default(autoincrement())
   email    String  @unique
+  name     String
   password String?
 }
```


