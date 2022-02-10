# hapi

## SQL Helpers

```SQL
-- list table
SELECT * FROM public.books
```

```SQL
-- dlete any row with a null field (keys needed)
DELETE FROM public.books
WHERE title is null OR author is null;
```
