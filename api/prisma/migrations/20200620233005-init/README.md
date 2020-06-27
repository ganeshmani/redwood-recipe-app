# Migration `20200620233005-init`

This migration has been generated at 6/20/2020, 11:30:05 PM.
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
migration 20200620232849..20200620233005-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
-  provider = "sqlite"
-  url = "***"
+  provider = "postgres"
+  url      = "postgresql://postgres:pass@localhost:5435/postgres"
 }
 generator client {
   provider      = "prisma-client-js"
```


