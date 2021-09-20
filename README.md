<img src="https://github.com/johncoleman83/AirBnB_clone/blob/master/dev/HBTN-hbnb-Final.png" width="160" height=auto />

# AirBnB Clone Phase #3

: python BaseModel Class, unittests, python CLI, & web static

## Description

Project attempts to clone the the AirBnB application and website, including the
database, storage, RESTful API, Web Framework, and Front End.

## Environment

* __OS:__ Ubuntu 14.04 LTS
* __language:__ Python 3.4.3
* __style:__ PEP 8 (v. 1.7.0)

<img src="https://github.com/johncoleman83/AirBnB_clone/blob/master/dev/hbnb_step5.png" />

## Testing


#### `unittest`

This project uses python library, `unittest` to run tests on all python files.
All unittests are in the `./tests` directory with the command:

* `python3 -m unittest discover -v ./tests/`

The bash script `init_test.sh` executes all these tests:

  * checks `pep8` style

  * runs all unittests

  * runs all w3c_validator tests

  * cleans up all `__pycache__` directories and the storage file, `file.json`

**Usage:**

```
$ ./dev/init_test.sh
```

#### CLI Interactive Tests

This project uses python library, `cmd` to run tests in an interactive command
line interface.  To begin tests with the CLI, run this script:

```
$ ./console.py
```

* For a detailed description of all tests, run these commands inside the
custom CLI:

```
$ ./console.py
(hbnb) help help
List available commands with "help" or detailed help with "help cmd".
(hbnb) help

Documented commands (type help <topic>):
========================================
Amenity    City  Place   State  airbnb  create   help  show
BaseModel  EOF   Review  User   all     destroy  quit  update

(hbnb) help User
class method with .function() syntax
        Usage: User.<command>(<id>)
(hbnb) help create
create: create [ARG]
        ARG = Class Name
        SYNOPSIS: Creates a new instance of the Class from given input ARG
```

* Tests in the CLI may also be executed with this syntax:

  * **destroy:** `<class name>.destroy(<id>)`

  * **update:** `<class name>.update(<id>, <attribute name>, <attribute value>)`

  * **update with dictionary:** `<class name>.update(<id>, <dictionary representation>)`


#### Continuous Integration

Uses [Travis-CI](https://travis-ci.org/) to run all tests on all commits to the
github repo

#### API Tests
In order to run the api, you need to open up the endpoint (route)
```
HBNB_MYSQL_USER=hbnb_dev HBNB_MYSQL_PWD=hbnb_dev_pwd
HBNB_MYSQL_HOST=localhost HBNB_MYSQL_DB=hbnb_dev_db
HBNB_TYPE_STORAGE=db HBNB_API_HOST=0.0.0.0 HBNB_API_PORT=5000 
python3 -m api.v1.app
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
...
```
In another terminal, you can test the API calls:
##### State
|   **Description**                  |  **HTTP Method** |   **format**   | 
|------------------------------------|------------------|----------------|
| Retrieve list of all state objects |     GET          | /api/v1/states |
| Retrieve  a state object   |     GET          | /api/v1/states/<state_id> |
| Delete a state object   |     DELETE          | /api/v1/states/<state_id> |
| Create a new state object   |     POST          | /api/v1/states |
| Alter a  state object   |     PUT          | /api/v1/states/<state_id> |

##### City
|   **Description**                  |  **HTTP Method** |   **format**   | 
|------------------------------------|------------------|----------------|
| Retrieve list of all city objects |     GET          | /api/v1/states/<state_id>/cities |
| Retrieve  a city object   |     GET          | /api/v1/cities/<city_id> |
| Delete a city object   |     DELETE          | /api/v1/cities/<city_id> |
| Create a new city object   |     POST          | /api/v1/states/<state_id>/cities |
| Alter a  city object   |     PUT          | /api/v1/cities/<city_id> |


##### Amenity
|   **Description**                  |  **HTTP Method** |   **format**   | 
|------------------------------------|------------------|----------------|
| Retrieve list of all amenity objects |     GET          | /api/v1/amenities |
| Retrieve  an amenity object   |     GET          | /api/v1/amenities/<amenity_id> |
| Delete an amenity object   |     DELETE          | /api/v1/amenities/<amenity_id> |
| Create a new amenity object   |     POST          | /api/v1/amenities |
| Alter an amenity object   |     PUT          | /api/v1/amenities/<amenity_id> |

##### User
|   **Description**                  |  **HTTP Method** |   **format**   | 
|------------------------------------|------------------|----------------|
| Retrieve list of all user objects |     GET          | /api/v1/users |
| Retrieve  a user object   |     GET          | /api/v1/users/<user_id> |
| Delete a user object   |     DELETE          | /api/v1/users/<user_id> |
| Create a new user object   |     POST          | /api/v1/users |
| Alter a user object   |     PUT          | /api/v1/users/<user_id> |

##### Place
|   **Description**                  |  **HTTP Method** |   **format**   | 
|------------------------------------|------------------|----------------|
| Retrieve list of all place objects |     GET          | /api/v1/cities/<city_id>/places |
| Retrieve a place object   |     GET          | /api/v1/places/<place_id> |
| Delete a place object   |     DELETE          | /api/v1/places/<place_id> |
| Create a new place object   |     POST          | /api/v1/cities/<city_id>/places |
| Alter a place object   |     PUT          | /api/v1/places/<place_id> |

##### Review
|   **Description**                  |  **HTTP Method** |   **format**   | 
|------------------------------------|------------------|----------------|
| Retrieve list of all review objects |     GET          | /api/v1/places/<place_id>/reviews |
| Retrieve a review object   |     GET          | /api/v1/reviews/<review_id> |
| Delete a review object   |     DELETE          | /api/v1/reviews/<review_id> |
| Create a new review object   |     POST          | /api/v1/places/<place_id>/reviews |
| Alter a review object   |     PUT          | /api/v1/reviews/<review_id> |

Example
```
vagrant@ubuntu:~/AirBnB_v3$ curl -X GET http://0.0.0.0:5000/api/v1/states/
[
  {
    "__class__": "State", 
    "created_at": "2017-04-14T00:00:02", 
    "id": "8f165686-c98d-46d9-87d9-d6059ade2d99", 
    "name": "Louisiana", 
    "updated_at": "2017-04-14T00:00:02"
  }, 
  {
    "__class__": "State", 
    "created_at": "2017-04-14T16:21:42", 
    "id": "1a9c29c7-e39c-4840-b5f9-74310b34f269", 
    "name": "Arizona", 
    "updated_at": "2017-04-14T16:21:42"
  }, 
...
vagrant@ubuntu:~/AirBnB_v3$ 
vagrant@ubuntu:~/AirBnB_v3$ curl -X GET http://0.0.0.0:5000/api/v1/states/8f165686-c98d-46d9-87d9-d6059ade2d99
 {
  "__class__": "State", 
  "created_at": "2017-04-14T00:00:02", 
  "id": "8f165686-c98d-46d9-87d9-d6059ade2d99", 
  "name": "Louisiana", 
  "updated_at": "2017-04-14T00:00:02"
}
vagrant@ubuntu:~/AirBnB_v3$ 
vagrant@ubuntu:~/AirBnB_v3$ curl -X POST http://0.0.0.0:5000/api/v1/states/ -H "Content-Type: application/json" -d '{"name": "California"}' -vvv
*   Trying 0.0.0.0...
* TCP_NODELAY set
* Connected to 0.0.0.0 (127.0.0.1) port 5000 (#0)
> POST /api/v1/states/ HTTP/1.1
> Host: 0.0.0.0:5000
> User-Agent: curl/7.51.0
> Accept: */*
> Content-Type: application/json
> Content-Length: 22
> 
* upload completely sent off: 22 out of 22 bytes
* HTTP 1.0, assume close after body
< HTTP/1.0 201 CREATED
< Content-Type: application/json
< Content-Length: 195
< Server: Werkzeug/0.12.1 Python/3.4.3
< Date: Sat, 15 Apr 2017 01:30:27 GMT
< 
{
  "__class__": "State", 
  "created_at": "2017-04-15T01:30:27.557877", 
  "id": "feadaa73-9e4b-4514-905b-8253f36b46f6", 
  "name": "California", 
  "updated_at": "2017-04-15T01:30:27.558081"
}
* Curl_http_done: called premature == 0
* Closing connection 0
vagrant@ubuntu:~/AirBnB_v3$ 
vagrant@ubuntu:~/AirBnB_v3$ curl -X PUT http://0.0.0.0:5000/api/v1/states/feadaa73-9e4b-4514-905b-8253f36b46f6 -H "Content-Type: application/json" -d '{"name": "California is so cool"}'
{
  "__class__": "State", 
  "created_at": "2017-04-15T01:30:28", 
  "id": "feadaa73-9e4b-4514-905b-8253f36b46f6", 
  "name": "California is so cool", 
  "updated_at": "2017-04-15T01:51:08.044996"
}
vagrant@ubuntu:~/AirBnB_v3$ 
vagrant@ubuntu:~/AirBnB_v3$ curl -X GET http://0.0.0.0:5000/api/v1/states/feadaa73-9e4b-4514-905b-8253f36b46f6
{
  "__class__": "State", 
  "created_at": "2017-04-15T01:30:28", 
  "id": "feadaa73-9e4b-4514-905b-8253f36b46f6", 
  "name": "California is so cool", 
  "updated_at": "2017-04-15T01:51:08"
}
vagrant@ubuntu:~/AirBnB_v3$ 
vagrant@ubuntu:~/AirBnB_v3$ curl -X DELETE http://0.0.0.0:5000/api/v1/states/feadaa73-9e4b-4514-905b-8253f36b46f6
{}
vagrant@ubuntu:~/AirBnB_v3$ 
vagrant@ubuntu:~/AirBnB_v3$ curl -X GET http://0.0.0.0:5000/api/v1/states/feadaa73-9e4b-4514-905b-8253f36b46f6
{
  "error": "Not found"
}
vagrant@ubuntu:~/AirBnB_v3$ 
```

## Authors
* **Bassem Yahia** - [Github profile](https://github.com/tennin12) - [Linkedin profile](https://tn.linkedin.com/in/bassem-ben-yahia)


## License

Public Domain, no copyright protection
