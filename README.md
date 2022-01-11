# test3 API for notes app

### Query type:GET
##### Endpoint: /api/notes/
:white_check_mark: Action: Get all notes
____
##### Endpoint: /api/notes/:id

:white_check_mark: Action: Retrieve item 
> URI Parameters:  
>:black_square_button: **id: required(string)**
____
##### Endpoint: /api/notes/stats
:white_check_mark: Action: Get data statistics
____
### Query type:POST
##### Endpoint: /api/notes
:white_check_mark: Action: Create a note object 
> URI Parameters:  
>:black_square_button: **name: required(string - min3 max15)**  
>:black_square_button: **content: required(string - min3 max30)**  
>:black_square_button: **category: required(string, one of: 'task', 'random', 'idea', 'quote')**  
____
### Query type:DELETE
##### Endpoint: /api/notes/:id  
:white_check_mark: Action: remove item  
> URI Parameters:  
>:black_square_button: **id: required(string)**  
____
### Query type:PATCH
##### Endpoint: /api/notes/:id  
:white_check_mark: Action: edit item  
> URI Parameters:  
>:black_square_button: **id: required(string)**  
>:black_square_button: **name: required(string - min3 max15)**  
>:black_square_button: **content: required(string - min3 max30)**  
>:black_square_button: **category: required(string, one of: 'task', 'random', 'idea', 'quote')**  

### Query type:PUT
##### Endpoint: /api/notes/:id  
:white_check_mark: Action: Archived/UnArchived 
> URI Parameters:  
>:black_square_button: **id: required(string)**  

