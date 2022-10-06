# Project: CIS4339 Project
This is a collection of different API methods used for the CIS 4339 dataplatform project. Included are API endpoint methods for primaryData, eventData, and org.
# 📁 Collection: primaryData Methods 


## End-point: Create primaryData
This route CREATES primaryData. Generally speaking, primaryData contains any information about a client that we want to collect on the intake form. Not all fields are required, but are highly recommended. Here is the structure of the request that should be sent:

``` json
  {
    "clientID": Integer,
    "org_id": ObjectId,
    "firstName": "String",
    "middleName": "String",
    "lastName": "String",
    "email": "string@boundschecking.org",
    "phoneNumbers": {
        "primaryPhone": 1234567890
    },
    "address": {
        "line1":"123 Anywhere St.",
        "line2": "APT 42",
        "city":"Houston",
        "county":"Harris",
        "zip":73534
	}


  }

```
### Method: POST
>```
>undefined
>```
### Body (**raw**)

```json
  {
    "clientID": 110,
    "org_id": "63352cb026eeaf51c501a3c5",
    "firstName":"Sam",
    "middleName":"XYZ",
    "lastName":"Smith",
    "email":"zxy@gmail.com",
    "phoneNumbers": {
        "primaryPhone": 7533243532
    },
    "address": {
        "line1":"2000 TX Rd",
        "line2": 32,
        "city":"Houston",
        "county":"Harris",
        "zip":73534
	}


  }
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: primaryData
This method GETs all available information in primaryData. Note that this spans ALL organizations, but it is limited to only 10 responses in the JSON reply at this time.
### Method: GET
>```
>undefined
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: primaryData by ID
This method GETs all available information in primaryData, **filtered using a global ID**. This does not use the client specific ClientID, nor does it rely on an organizational ID. If you know the global ID for a client, use this to get more information about them.
### Method: GET
>```
>http://localhost:3000/primaryData/search?searchBy=id&id=633e6e782532d8103f36c17a
>```
### Query Params

|Param|value|
|---|---|
|searchBy|id|
|id|633e6e782532d8103f36c17a|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: primaryData by Name Search
This method GETs all available information in primaryData, **filtered using their first and last name**. **This method relies on using an organizational ID**. Otherwise, how would we know who we're looking for?! We could be crazy and want to search ALL organizations on the database, but we'd much rather prefer you know which organization you want to take a peek at.

Four query parameters are required:

| **Key** | **Value** |
| --- | --- |
| searchBy | name |
| firstName | String |
| lastName | String |
| org_id | ObjectId |
### Method: GET
>```
>http://localhost:3000/primaryData/search?searchBy=name&firstName=Sam&lastName=Smith&org_id=63352cb026eeaf51c501a3c5
>```
### Query Params

|Param|value|
|---|---|
|searchBy|name|
|firstName|Sam|
|lastName|Smith|
|org_id|63352cb026eeaf51c501a3c5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: primaryData by Phone Search
This method GETs all available information in primaryData, **filtered using their PRIMARY phone number**. **This method relies on using an organizational ID**. Otherwise, how would we know who we're looking for?! We could be crazy and want to search ALL organizations on the database, but we'd much rather prefer you know which organization you want to take a peek at. This method is currently not adapted to using the secondary phone number field. Could be expanded to look at ALL organizations to see if this person is a member of multiple organizations.

Three query parameters are required:

| **Key** | **Value** |
| --- | --- |
| searchBy | number |
| phoneNumbers.primaryPhone | String |
| org_id | ObjectId |
### Method: GET
>```
>http://localhost:3000/primaryData/search?searchBy=number&phoneNumbers.primaryPhone=7533243532&org_id=63352cb026eeaf51c501a3c5
>```
### Query Params

|Param|value|
|---|---|
|searchBy|number|
|phoneNumbers.primaryPhone|7533243532|
|org_id|63352cb026eeaf51c501a3c5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: primaryData by Organization
This method GETs all available information in primaryData, **filtered using the organizational ID**. **This method relies on using an organizational ID**. Simply put, if you want to see all the members of an organization - you'd use this method.

Two query parameters are required:

| **Key** | **Value** |
| --- | --- |
| searchBy | org |
| org_id | ObjectId |
### Method: GET
>```
>http://localhost:3000/primaryData/search?searchBy=org&org_id=63352cb026eeaf51c501a3c5
>```
### Query Params

|Param|value|
|---|---|
|searchBy|org|
|org_id|63352cb026eeaf51c501a3c5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: primaryData by ID
This method PUTs new information in primaryData for an **existing** member, **filtered using the global mongoose ID**. **This method relies on using the global ID**. If you know which specific person of a specific organization you want to update given that you know their global ID, use this method. **Do not try to overwrite the ID that the database has given the person.**
### Method: PUT
>```
>http://localhost:3000/primaryData/update?updateBy=id&id=633e6b812532d8103f36c16f
>```
### Body (**raw**)

```json
  {
    "clientID": 108,
    "org_id": "63352cb026eeaf51c501a3c5",
    "firstName":"Shasta",
    "middleName":"A",
    "lastName":"Cougar",
    "email":"shasta@uh.edu",
    "phoneNumbers":{
        "primaryPhone": 2817133460
    },
    "address": {
        "line1":"2000 TX Rd",
        "line2": 32,
        "city":"Houston",
        "county":"Harris",
        "zip":73534
	}
  }
```

### Query Params

|Param|value|
|---|---|
|updateBy|id|
|id|633e6b812532d8103f36c16f|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: primaryData by First, Last Name
This method PUTs new information in primaryData for an **existing** member, **filtered using their first and last name**. **This method relies on using an organizational ID**. Otherwise, how would we know who we're looking for?! We could be crazy and want to search ALL organizations on the database, but we'd much rather prefer you know which organization you want to take a peek at.
### Method: PUT
>```
>http://localhost:3000/primaryData/update?updateBy=name&firstName=Sam&lastName=Smith&org_id=63352cb026eeaf51c501a3c5
>```
### Body (**raw**)

```json
  {
    "clientID": 108,
    "org_id": "63352cb026eeaf51c501a3c5",
    "firstName":"Shasta",
    "middleName":"A",
    "lastName":"Cougar",
    "email":"shasta@uh.edu",
    "phoneNumbers":{
        "primaryPhone": 2817133460
    },
    "address": {
        "line1":"2000 TX Rd",
        "line2": 32,
        "city":"Houston",
        "county":"Harris",
        "zip":73534
	}
  }
```

### Query Params

|Param|value|
|---|---|
|updateBy|name|
|firstName|Sam|
|lastName|Smith|
|org_id|63352cb026eeaf51c501a3c5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: primaryData by Phone Number
This method PUTs new information in primaryData for an **existing** member, **filtered using their phone number**. **This method relies on using an organizational ID**. Otherwise, how would we know who we're looking for?! We could be crazy and want to search ALL organizations on the database, but we'd much rather prefer you know which organization you want to take a peek at. This method is currently not adapted to using the secondary phone number field.
### Method: PUT
>```
>http://localhost:3000/primaryData/update?updateBy=number&org_id=633e6b812532d8103f36c16f&phoneNumbers.primaryPhone=2817133460
>```
### Body (**raw**)

```json
  {
    "clientID": 108,
    "org_id": "63352cb026eeaf51c501a3c5",
    "firstName":"Shasta",
    "middleName":"A",
    "lastName":"Cougar",
    "email":"shasta@uh.edu",
    "phoneNumbers":{
        "primaryPhone": 8328886529
    },
    "address": {
        "line1":"2000 TX Rd",
        "line2": 32,
        "city":"Houston",
        "county":"Harris",
        "zip":73534
	}
  }
```

### Query Params

|Param|value|
|---|---|
|updateBy|number|
|org_id|633e6b812532d8103f36c16f|
|phoneNumbers.primaryPhone|2817133460|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: primaryData by ID
**USE EXTREME CAUTION. THIS IS A HARD DELETE FUNCTION.**

This function **DELETES** en existing user by using their global mongoose ID. **Two query parameters are required: the global ID, and the organizational ID.** This is used as a sanity check just to ensure that you really want to delete this person off the database.
### Method: DELETE
>```
>http://localhost:3000/primaryData/delete?searchBy=id&id=633e6b812532d8103f36c16f
>```
### Query Params

|Param|value|
|---|---|
|searchBy|id|
|id|633e6b812532d8103f36c16f|
|org_id|63352cb026eeaf51c501a3c5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: primaryData by Phone Number, Organization
**USE EXTREME CAUTION. THIS IS A HARD DELETE FUNCTION.**

This function **DELETES** en existing user by using their **phone number** and **organizational** **ID**. **Two query parameters are required: the phone number, and the organizational ID.** This is used as a sanity check just to ensure that you really want to delete this person off the database. Additionally, this function only does a findOneAndDelete() through mongoose, so you cannot bulk delete people off the database.
### Method: DELETE
>```
>http://localhost:3000/primaryData/delete?searchBy=number&phoneNumbers.primaryPhone=7533243532&org_id=63352cb026eeaf51c501a3c5
>```
### Query Params

|Param|value|
|---|---|
|searchBy|number|
|phoneNumbers.primaryPhone|7533243532|
|org_id|63352cb026eeaf51c501a3c5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: primaryData by First, Last Name, Organization
### Method: DELETE
>```
>http://localhost:3000/primaryData/delete?searchBy=name&firstName=Henry&lastName=Ford&org_id=63352cb026eeaf51c501a3c5
>```
### Query Params

|Param|value|
|---|---|
|searchBy|name|
|firstName|Henry|
|lastName|Ford|
|org_id|63352cb026eeaf51c501a3c5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: eventData Methods 


## End-point: Create eventData
### Method: POST
>```
>undefined
>```
### Body (**raw**)

```json
{
    "org_id": "63352cb026eeaf51c501a3c5",
    "eventName":"Family",
    "services":"Serve Food",
    "date":"04/05/2022",
    "address": {
        "line1":"2000 Gulf Freeway",
        "line2": "124",
        "city":"Houston",
        "county":"Harris",
        "zip":73534
	},
    "description":"Serve Food to People",
    "attendees": "633d90d921b379ae6f3a247b"
  }
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GET all entries for eventData
### Method: GET
>```
>undefined
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GET Event entry by ID
### Method: GET
>```
>undefined
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GET entries based on search query
### Method: GET
>```
>http://localhost:3000/eventData/search?eventName=Food&searchBy=name
>```
### Body (**raw**)

```json

```

### Query Params

|Param|value|
|---|---|
|eventName|Food|
|searchBy|name|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Updating Event
### Method: PUT
>```
>undefined
>```
### Body (**raw**)

```json
{
    "org_id": "63352cb026eeaf51c501a3c5",
    "eventName":"Family",
    "services":"Serve Food",
    "date":"04/05/2022",
    "address": {
        "line1":"2000 Gulf Freeway",
        "line2": "124",
        "city":"Houston",
        "county":"Harris",
        "zip":73534
	},
    "description":"Serve Food to People",
    "attendees":
            [
            "633c2ef86880b358bd7c923e"
        ]
  }
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GET events for which a client is signed up by client id
### Method: GET
>```
>undefined
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete Event by id
### Method: DELETE
>```
>undefined
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Add attendee
### Method: PUT
>```
>undefined
>```
### Body (**raw**)

```json
{
    "_id": "633c795c73bda9bd2f716794",
    "attendees": [
            "633af9c694c554c52695586e"
        ]

   
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: GET events for which a client is signed up by client id
### Method: GET
>```
>undefined
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Events by Org Id
### Method: GET
>```
>undefined
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: org Methods 


## End-point: Create Org
### Method: POST
>```
>undefined
>```
### Body (**raw**)

```json
{
    "org_id": "3",
    "orgName":"Blue Cross"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Get Org
### Method: GET
>```
>undefined
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Org by id
### Method: GET
>```
>undefined
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Updating Org
### Method: PUT
>```
>undefined
>```
### Body (**raw**)

```json
{
    "orgName": "Salvation Army"
}
```


⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Delete org
### Method: DELETE
>```
>undefined
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
