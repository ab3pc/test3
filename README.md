# test3 API for notes app

### Query type:GET
##### Endpoint: /notes/
:white_check_mark: Action: Get all notes
____
##### Endpoint: /notes/:id

:white_check_mark: Action: Retrieve item 
> URI Parameters:  
>:black_square_button: **id: required(integer/string)**
____
##### Endpoint: /notes/stats
:white_check_mark: Action: Get data statistics
____
### Query type:POST
##### Endpoint: /notes
:white_check_mark: Action: Create a note object 
> URI Parameters:  
>:black_square_button: **name: required(string - min3 max15)**  
>:black_square_button: **content: required(string - min3 max30)**  
>:black_square_button: **category: required(string, one of: 'task', 'random', 'idea', 'quote')**  
____
### Query type:DELETE
##### Endpoint: /notes/:id  
:white_check_mark: Action: remove item  
> URI Parameters:  
>:black_square_button: **id: required(integer/string)**  
____
### Query type:PATCH
##### Endpoint: /notes/:id  
:white_check_mark: Action: edit item  
> URI Parameters:  
>:black_square_button: **id: required(integer/string)**  
>:black_square_button: **name: (string - min3 max15)**  
>:black_square_button: **content: (string - min3 max30)**  
>:black_square_button: **category: (string, one of: 'task', 'random', 'idea', 'quote')**  
