-- DROP DATABASE IF EXISTS tododb;
-- CREATE DATABASE tododb;

-- USE tododb;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS tasks;


CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    pass VARCHAR(20) NOT NULL
);

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    --foreign key (users -> user_id)
    uid INTEGER REFERENCES users(user_id),
    task VARCHAR(32) NOT NULL
);

--ALTER TABLE tasks
    --ADD CONSTRAINT user_id_fk FOREIGN KEY (user_id)
    --REFERENCES users(user_id);

--psql -U mattwaelder -d tododb -a -f /src/todo.sql


-----
-- \q l du ...
