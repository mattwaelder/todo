--may need to drop db and add db too
DROP TABLE IF EXISTS "users";
DROP TABLE IF EXISTS "tasks";

CREATE TABLE users (
    "id" INTEGER PRIMARY KEY NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "pass" VARCHAR(20) NOT NULL
);
CREATE TABLE tasks(
    "id" INTEGER PRIMARY KEY NOT NULL,
    "user_id" REFERENCES users(id) NOT NULL,
    "task" VARCHAR(32) NOT NULL
);

--psql -U mattwaelder -d tododb -a -f /src/todo.sql



--generated by a schema viewer, kinda trash wtf

-- CREATE TABLE "tasks"(
--     "id" INTEGER NOT NULL,
--     "user_id" VARCHAR(255) NOT NULL,
--     "task" VARCHAR(255) NOT NULL
-- );
-- ALTER TABLE
--     "tasks" ADD PRIMARY KEY("id");
-- CREATE TABLE "users"(
--     "id" INTEGER NOT NULL,
--     "name" VARCHAR(255) NOT NULL,
--     "password" VARCHAR(255) NOT NULL
-- );
-- ALTER TABLE
--     "users" ADD PRIMARY KEY("id");
-- ALTER TABLE
--     "tasks" ADD CONSTRAINT "tasks_user_id_foreign" FOREIGN KEY("user_id") REFERENCES "users"("id");