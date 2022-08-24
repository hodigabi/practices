#### split string by spaces

Given a string and a desired chunk length, split the string into chunks of size <= length, prioritizing splitting on spaces if possible.


Examples
```
chunkString('123456789', 2)
returns ['12','34','56','78','9']
```

```
chunkString('Here is a somewhat realistic example of this method being executed',9)
returns ['Here is a','somewhat','realistic','example','of this','method','being','executed']
```

```
chunkString("a a a a a a a a a a a", 20)
returns ['a a a a a a a a a a', 'a']
```

```
chunkString("prignd rignd hidnthodngdrogn irdsog inrd gonrdg nordgdrgn driogn drognidro gndro grdn igodinhodrinh odrinhordnhdorhnid orgndorgn rdogn ordn godrn god gndo gdnr ", 160)
returns ['prignd rignd hidnthodngdrogn irdsog inrd gonrdg nordgdrgn driogn drognidro gndro grdn igodinhodrinh odrinhordnhdorhnid orgndorgn rdogn ordn godrn god gndo gdnr']
```