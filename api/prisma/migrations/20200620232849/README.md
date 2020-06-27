# Migration `20200620232849`

This migration has been generated at 6/20/2020, 11:28:49 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."new_User" (
"email" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"password" TEXT   )

INSERT INTO "quaint"."new_User" ("email", "id", "password") SELECT "email", "id", "password" FROM "quaint"."User"

PRAGMA foreign_keys=off;
DROP TABLE "quaint"."User";;
PRAGMA foreign_keys=on

ALTER TABLE "quaint"."new_User" RENAME TO "User";

CREATE UNIQUE INDEX "quaint"."User.email" ON "User"("email")

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200620214606-init..20200620232849
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "sqlite"
-  url      = "***"
+  url      = env("DATABASE_URL")
 }
 generator client {
   provider      = "prisma-client-js"
@@ -13,7 +13,6 @@
 // TODO: Please remove the following example:
 model User {
   id       Int     @id @default(autoincrement())
   email    String  @unique
-  name     String?
   password String?
 }
```


