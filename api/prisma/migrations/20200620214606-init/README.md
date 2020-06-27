# Migration `20200620214606-init`

This migration has been generated at 6/20/2020, 9:46:06 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;

CREATE TABLE "quaint"."User" (
"email" TEXT NOT NULL  ,"id" INTEGER NOT NULL  PRIMARY KEY AUTOINCREMENT,"name" TEXT   ,"password" TEXT   )

CREATE UNIQUE INDEX "quaint"."User.email" ON "User"("email")

PRAGMA "quaint".foreign_key_check;

PRAGMA foreign_keys=ON;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200620214606-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,19 @@
+datasource DS {
+  provider = "sqlite"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider      = "prisma-client-js"
+  binaryTargets = env("BINARY_TARGET")
+}
+
+// Define your own datamodels here and run `yarn redwood db save` to create
+// migrations for them.
+// TODO: Please remove the following example:
+model User {
+  id       Int     @id @default(autoincrement())
+  email    String  @unique
+  name     String?
+  password String?
+}
```


