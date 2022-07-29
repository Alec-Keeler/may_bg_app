### Get details of a Boardgame from an id

Returns the details of a boardgame specified by its id.

* Require Authentication: false
* Request
  * Method: GET
  * URL: /boardgames/:id
  * Body: none

* Successful Response
  * Status Code: 200
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "name": "Gloomhaven",
      "maxPlayers": 4,
      "category": "Adventure",
      "avgRating": 5,
      "Reviews": [
        {
            "content": "This game is far too long!",
            "rating": 5,
            "gameId": 1,
            "User": {
                "username": "aleckeeler"
            }
        }
      ]
    }
    ```

* Error response: Couldn't find a Boardgame with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Boardgame couldn't be found",
      "statusCode": 404
    }
    ```


### Create a Review for a Boardgame based on the Boardgame's id

Create and return a new review for a boardgame specified by id.

* Require Authentication: true
* Request
  * Method: POST
  * URL: /boardgames/:id/reviews
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "content": "This was an awesome boardgame!",
      "rating": 5,
    }
    ```

* Successful Response
  * Status Code: 201
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "id": 1,
      "userId": 1,
      "gameId": 1,
      "content": "This was an awesome spot!",
      "rating": 5,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
    }
    ```

* Error Response: Body validation errors
  * Status Code: 400
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Validation error",
      "statusCode": 400,
      "errors": {
        "review": "Review content is required",
        "rating": "Rating must be an integer from 1 to 5",
      }
    }
    ```

* Error response: Couldn't find a Boardgame with the specified id
  * Status Code: 404
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Boardgame couldn't be found",
      "statusCode": 404
    }
    ```