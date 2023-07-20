# Travelopia Backend API

This repository contains the backend API for Travelopia, a travel management system.

## APIs

### Create Enquiry

Endpoint: `http://localhost:4000/api/enquiry/create`

#### Payload

{
"source": "abc",
"destination": "def",
"package": 1,
"person": 2,
"status": 2,
"phone": 123212,
"email": "cjd@md.dd",
"name": "am"
}



#### Response

{
"status": "success",
"message": "Enquiry Created Successfully",
"data": {
"id": "64b98e66c3cd687fac78b21e",
"source": "abc",
"destination": "def",
"package": 1,
"person": 2,
"status": 2,
"name": "am",
"email": "cjd@md.dd",
"phone": 123212,
"_id": "64b98e66c3cd687fac78b21f",
"__v": 0
}
}




### Get All Enquiries

Endpoint: `http://localhost:4000/api/enquiry`

#### Response

{
"status": "success",
"message": "success",
"data": [
{
"_id": "64b90cb6e8cf2d4164da9925",
"id": "64b90cb6e8cf2d4164da9924",
"source": "Delhi",
"destination": "Bangalore",
"package": 1,
"person": 2,
"status": 2,
"name": "Ritesh Kumar",
"email": "ritesh@gmail.com",
"phone": 91302006487,
"date": "2023-07-21T00:00:00.000Z",
"__v": 0
},
// More enquiry objects...
]
}


### Create User

Endpoint: `http://localhost:4000/api/user/create`

#### Payload

{
"firstName": "traveller",
"lastName": "",
"email": "traveller1@mailinator.com",
"password": "1234516",
"role": 2
}


#### Response

{
"status": "success",
"message": "User creation Success",
"data": {
"id": "64b98d0e1c1829444b823e35",
"firstName": "traveller",
"lastName": "",
"email": "traveller1@mailinator.com",
"password": "1234516",
"role": 2,
"_id": "64b98d0e1c1829444b823e36",
"__v": 0
}
}

### User Login

Endpoint: `http://localhost:4000/api/login`

#### Payload

{
"email": "admin@mailinator.com",
"password": "123458"
}


#### Response

{
"status": "failure",
"message": "wrong credentials",
"data": null
}


## How to Run

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install`.
3. Run the server using `npm start`.
4. The backend API will be available at `http://localhost:4000`.

