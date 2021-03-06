# Article Practice BackEnd

---

TOC:

- users table
- categories table
- articles table
- users endpoints

- seeds:
  - user seeds
  - category seeds

## Users table

- `user_id` -> primary key, increments when user is created
- `username` -> string 65 characters max must be unique required
- `password` -> text required
- `timestamps` are created but not used in app.

---

## categories table

- `category_id` -> primary key increments on creation of a category.
- `category` -> string, max length 35 characters, must be unique and required.
- `timestamps` -> created on creation but not used in app.

---

## articles table

- `article_id` -> primary key, increments on article creation.
- `title` -> string, 160 characters max, must be unique, required.
- `content` -> text required.
- `timestamps` -> created not used in app as of now.
- `category_id` -> integer required -> references category table - category id.

---

## Users

1. `GET` -> ENDPOINT `/users` uses `dbUser.locate()`
   `if` user returns `users`
   `else` 400 error 'none to display.'
   `else if` server error.
   displays: all `username` with `user_id`, `created_at`, `updated_at`

1. `PUT` => ENDPOINT `/users` uses `dbUser.addUser(data)`
   ! requires -> body.username
   ! requires -> body.password
   `if` data passed in `201` success
   `else` server error `500` fail.
   displays: `user_id`, `username`, `created_at`, `updated_at`

1. `DELETE` => ENDPOINT `/users/:id` uses `dbUser.remove(id)`
   ! requires => params.id
   `if` no params.id `400` error.
   `else` removes user displays -> how many users were removed. (should be 1).

1. **note** cannot update user names.

---

## Seeds

the seed files are prebuilt data, for quicker testing and building out of the application and testing.
to get seeds run `npx knex seed:run`

### User Seeds

The user table comes with 3 pre built seeds ready for use.
they can be found at `seeds/001_users.js`

### Category Seeds

The categories table comes with 5 prebuilt seeds ready for use.
they can be found at `seeds/002_categories.js`
