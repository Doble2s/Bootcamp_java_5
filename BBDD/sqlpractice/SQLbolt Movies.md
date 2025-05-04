# SQLbolt 1-4

## tabla Movies

| id  | title               | director       | year | length_minutes |
| --- | ------------------- | -------------- | ---- | -------------- |
| 1   | Toy Story           | John Lasseter  | 1995 | 81             |
| 2   | A Bug's Life        | John Lasseter  | 1998 | 95             |
| 3   | Toy Story 2         | John Lasseter  | 1999 | 93             |
| 4   | Monsters, Inc.      | Pete Docter    | 2001 | 92             |
| 5   | Finding Nemo        | Andrew Stanton | 2003 | 107            |
| 6   | The Incredibles     | Brad Bird      | 2004 | 116            |
| 7   | Cars                | John Lasseter  | 2006 | 117            |
| 8   | Ratatouille         | Brad Bird      | 2007 | 115            |
| 9   | WALL-E              | Andrew Stanton | 2008 | 104            |
| 10  | Up                  | Pete Docter    | 2009 | 101            |
| 11  | Toy Story 3         | Lee Unkrich    | 2010 | 103            |
| 12  | Cars 2              | John Lasseter  | 2011 | 120            |
| 13  | Brave               | Brenda Chapman | 2012 | 102            |
| 14  | Monsters University | Dan Scanlon    | 2013 | 110            |
| 87  | WALL-G              | Brenda Chapman | 2042 | 97             |

### ejercicio 1

**1. Find the title of each film**

```sql
SELECT Title FROM movies;
```

**2. Find the director of each film
**

```sql
SELECT Director FROM movies;
```

**3 Find the title and director of each film**

```sql
SELECT Title, Director FROM movies;
```

**4. Find the title and year of each film**

```sql
SELECT Title, Year FROM movies;
```

**5. Find all the information about each film**

```sql
SELECT * FROM movies;
```

### ejercicio 2

**1. Find the movie with a row id of 6**

```sql
SELECT * FROM movies WHERE id=6;;
```

**2. Find the movies released in the years between 2000 and 2010**

```sql
SELECT * FROM movies WHERE Year BETWEEN 2000 AND 2010
```

**3. Find the movies not released in the years between 2000 and 2010**

```sql
SELECT * FROM movies WHERE Year NOT BETWEEN 2000 AND 2010
```

**4. Find the first 5 Pixar movies and their release year**

```sql
SELECT * FROM movies WHERE id BETWEEN 1 AND 5
```

### ejercicio 3

**1. Find all the Toy Story movies**

```sql
SELECT * FROM movies WHERE Title LIKE 'Toy Story%'
```

**2. Find all the movies directed by John Lasseter**

```sql
SELECT * FROM movies WHERE Director ='John Lasseter';
```

**3. Find all the movies (and director) not directed by John Lasseter**

```sql
SELECT * FROM movies WHERE NOT Director ='John Lasseter';
```

**4. Find all the WALL- movies**

```sql
SELECT * FROM movies WHERE Title LIKE 'WALL-%'
```

### ejercicio 4

**1. List all directors of Pixar movies (alphabetically), without duplicates**

```sql
SELECT DISTINCT Director FROM movies ORDER BY Director ASC;
```

**2. List the last four Pixar movies released (ordered from most recent to least)**

```sql
SELECT DISTINCT * FROM movies ORDER BY Year DESC LIMIT 4;
```

**3. List the first five Pixar movies sorted alphabetically**

```sql
SELECT * FROM movies ORDER BY Title ASC LIMIT 5;
```

**4. List the next five Pixar movies sorted alphabetically**

```sql
SELECT * FROM movies ORDER BY Title ASC LIMIT 5 OFFSET 5;
```
