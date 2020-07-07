# app namespace
@app
simple-web

# define http functions (api gateway + lambda)
@http
get /

# define dynamodb tables
@tables
cats
  catID *String
