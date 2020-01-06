# articles-prac-be

---

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
