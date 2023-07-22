# MINI-YELP Server API

This repository provides the code for a Yelp-like Express server.

The server features several routes that provide different functionalities like listing restaurants, listing a specific restaurant and adding a new one.

## Routes

The following routes are available:

| Method | Path                          | Description                                 |
| ------ | ----------------------------- | ------------------------------------------- |
| GET    | /restaurants/list             | Lists all restaurants                       |
| GET    | /restaurants/listOne/:id      | Lists a specific restaurant by its ID       |
| POST   | /restaurants/add              | Adds a new restaurant                       |
| GET    | /restaurants/cities           | Lists all cities                            |


## Sample Outputs

Here are some example outputs from these endpoints:

1. GET `/restaurants/list`

   ```
[
  {
    "_id": "64bbaa497496a5d98178fc9b",
    "name": "Veggie Heaven",
    "description": "Escape the hustle of the city and find solace in this cozy haven offering delectable vegetarian comfort food.",
    "openingTime": "11:00 - 22:00",
    "address": {
      "street": "89 Serenity Lane",
      "postcode": "3000",
      "city": "Melbourne",
      "_id": "64bbaa497496a5d98178fc9c"
    },
    "coordinates": [
      -37.8136,
      144.9631
    ],
    "comments": [
      {
        "user": "Ella",
        "comment": "Great options for vegans!",
        "_id": "64bbaa497496a5d98178fc9d"
      }
    ],
    "tags": [
      "Vegetarian",
      "Healthy"
    ],
    "image": "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
  },
  //more restaurants
]
   ```

2. GET `/restaurants/listOne/64bbaa497496a5d98178fc9b`

```
{
  "_id": "64bbaa497496a5d98178fc9b",
  "name": "Veggie Heaven",
  "description": "Escape the hustle of the city and find solace in this cozy haven offering delectable vegetarian comfort food.",
  "openingTime": "11:00 - 22:00",
  "address": {
    "street": "89 Serenity Lane",
    "postcode": "3000",
    "city": "Melbourne",
    "_id": "64bbaa497496a5d98178fc9c"
  },
  "coordinates": [
    -37.8136,
    144.9631
  ],
  "comments": [
    {
      "user": "Ella",
      "comment": "Great options for vegans!",
      "_id": "64bbaa497496a5d98178fc9d"
    }
  ],
  "tags": [
    "Vegetarian",
    "Healthy"
  ],
  "image": "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
}
```

3. POST `/restaurants/add`
   Request body:

```
{
"name": "BBQ Pitmaster's Grill",
"description": "Savor the smoky goodness of slow-cooked barbecue, featuring tender meats and mouthwatering flavors crafted by expert pitmasters.",
"address": {
			"street": "45 Hickory Lane",
			"postcode": "10005",
			"city": "New York"
},
"openingTime": "16:00 - 23:00",
"comments": [
  {
      "user": "Olivia",
      "comment": "Authentic barbecue experience!"
    }
  ],
"coordinates": [40.7060, -74.0088],
"tags": ["BBQ", "American"],
"image": "https://plus.unsplash.com/premium_photo-1664475361087-e2bea16ee3bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
}
```

4. GET `/restaurants/cities`

```
{
  "success": true,
  "cities": [
    "Bangkok",
    "Melbourne",
    "New York"
  ]
}
```


## Sample Usage

You can use these endpoints in your code using the fetch API, Axios or any other method of making HTTP requests.

Here is an example using the fetch API in JavaScript:

`fetch('https://mini-yelp-server-new.vercel.app/restaurants/list')`