# Migration `20200624163342-init`

This migration has been generated at 6/24/2020, 4:33:42 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"email" text  NOT NULL ,"id" SERIAL,"password" text   ,
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "User.email" ON "public"."User"("email")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200620233005-init..20200624163342-init
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
```


