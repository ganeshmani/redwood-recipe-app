# Migration `20200626225420-recipe`

This migration has been generated at 6/26/2020, 10:54:20 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Recipe" (
"description" text  NOT NULL ,"id" SERIAL,"imageUrl" text  NOT NULL ,"likes" integer  NOT NULL ,"name" text  NOT NULL ,"userId" integer   ,
    PRIMARY KEY ("id"))

ALTER TABLE "public"."Recipe" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE SET NULL  ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200624171734-name-added..20200626225420-recipe
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
@@ -11,9 +11,20 @@
 // Define your own datamodels here and run `yarn redwood db save` to create
 // migrations for them.
 // TODO: Please remove the following example:
 model User {
-  id       Int     @id @default(autoincrement())
-  email    String  @unique
+  id       Int      @id @default(autoincrement())
+  email    String   @unique
   name     String
   password String?
+  Recipe   Recipe[]
 }
+
+model Recipe {
+  id          Int    @id @default(autoincrement())
+  name        String
+  description String
+  imageUrl    String
+  likes       Int
+  userId      Int?
+  User        User?  @relation(fields: [userId], references: [id])
+}
```


