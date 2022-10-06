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
>http://localhost:3000/primaryData/
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
>http://localhost:3000/primaryData/
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
**USE EXTREME CAUTION. THIS IS A HARD DELETE FUNCTION.**

This function **DELETES** en existing user by using their **first name, last name,** and **organizational** **ID**. **Three query parameters are required: the first name, last name and the organizational ID.** This is used as a sanity check just to ensure that you really want to delete this person off the database. Additionally, this function only does a findOneAndDelete() through mongoose, so you cannot bulk delete people off the database.
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
This route CREATES eventData. Generally speaking, eventData contains any information about an event that we want to collect on the intake form. Not all fields are required, but are highly recommended. Here is the structure of the request that should be sent:
### Method: POST
>```
>http://localhost:3000/eventData/
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

## End-point: eventData
This method GETs all available information in primaryData. Note that this spans ALL organizations, but it is limited to only 10 responses in the JSON reply at this time.
### Method: GET
>```
>http://localhost:3000/eventData/
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: eventData by Event Name Search
This method GETs all available information in primaryData, **filtered using the event name**. **This method relies on using an organizational ID**. Otherwise, how would we know who we're looking for?! We could be crazy and want to search ALL organizations on the database, but we'd much rather prefer you know which organization you want to take a peek at.
### Method: GET
>```
>http://localhost:3000/eventData/search?eventName=Family&org_id=63352cb026eeaf51c501a3c5&searchBy=name
>```
### Body (**raw**)

```json

```

### Query Params

|Param|value|
|---|---|
|eventName|Family|
|org_id|63352cb026eeaf51c501a3c5|
|searchBy|name|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: eventData by Event Date Search
This method GETs all available information in primaryData, **filtered using the event datae**. **This method relies on using an organizational ID**. Note that the date you send **MUST** match the date format you sent the server in the first place. In the first query, we sent a date format of DD/MM/YYYY, so you MUST send this GET query with the format DD/MM/YYYY.
### Method: GET
>```
>http://localhost:3000/eventData/search?eventDate=04/05/2022&org_id=63352cb026eeaf51c501a3c5&searchBy=date
>```
### Query Params

|Param|value|
|---|---|
|eventDate|04/05/2022|
|org_id|63352cb026eeaf51c501a3c5|
|searchBy|date|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: eventData by Client Search
This method GETs all available information in eventData, **filtered using a global ID**. This does not use the client specific ClientID, nor does it rely on an organizational ID. If you know the global ID for a client, use this to get information about which events they're signed up for.
### Method: GET
>```
>http://localhost:3000/eventData/search?id=633d90d921b379ae6f3a247b&searchBy=client
>```
### Body (**raw**)

```json

```

### Query Params

|Param|value|
|---|---|
|id|633d90d921b379ae6f3a247b|
|searchBy|client|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: eventData by Organziation Search
This method GETs all available information in eventData, **filtered using the organizational ID**. **This method relies on using an organizational ID**. Simply put, if you want to see all the events of an organization - you'd use this method.
### Method: GET
>```
>http://localhost:3000/eventData/search?searchBy=org&org_id=63352cb026eeaf51c501a3c5
>```
### Query Params

|Param|value|
|---|---|
|searchBy|org|
|org_id|63352cb026eeaf51c501a3c5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: eventData by ID Search
This method GETs all available information in eventData, **filtered using a global ID**. This does not use the client specific ClientID, nor does it rely on an organizational ID. If you know the global ID for an EVENT, use this to get information about the event you want to learn about.
### Method: GET
>```
>http://localhost:3000/eventData/search?id=633ee9c417f5a6873724dae0&searchBy=id
>```
### Body (**raw**)

```json

```

### Query Params

|Param|value|
|---|---|
|id|633ee9c417f5a6873724dae0|
|searchBy|id|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: eventData by Event Name, Organization
This method PUTs new information in eventData for an **existing** event, **filtered using the event name**. **This method relies on using an organizational ID**. Otherwise, how would we know who we're looking for?! We could be crazy and want to search ALL organizations on the database, but we'd much rather prefer you know which organization you want to take a peek at. **Do NOT attempt to update the global mongoose ID.**
### Method: PUT
>```
>http://localhost:3000/eventData/update?eventName=Family&updateBy=name&org_id=63352cb026eeaf51c501a3c5
>```
### Body (**raw**)

```json
{
    "org_id": "63352cb026eeaf51c501a3c5",
    "eventName":"Family",
    "services":"Clothing Donation",
    "date":"04/05/2022",
    "address": {
        "line1":"2131 Post Oak Blvd",
        "line2": "124",
        "city":"Houston",
        "county":"Harris",
        "zip":77056
	},
    "description":"Give Socks to People",
    "attendees": "633d90d921b379ae6f3a247b"
  }
```

### Query Params

|Param|value|
|---|---|
|eventName|Family|
|updateBy|name|
|org_id|63352cb026eeaf51c501a3c5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: eventData by Event Date, Organization
This method PUTs new information in eventData for an **existing** event, **filtered using the event date**. **This method relies on using an organizational ID**. Otherwise, how would we know who we're looking for?! We could be crazy and want to search ALL organizations on the database, but we'd much rather prefer you know which organization you want to take a peek at. **Do NOT attempt to update the global mongoose ID.**

Note that the date you send **MUST** match the date format you sent the server in the first place. In the first query, we sent a date format of DD/MM/YYYY, so you MUST send this PUT query with the format DD/MM/YYYY.
### Method: PUT
>```
>http://localhost:3000/eventData/update?eventDate=04/05/2022&updateBy=date&org_id=63352cb026eeaf51c501a3c5
>```
### Body (**raw**)

```json
{
    "org_id": "63352cb026eeaf51c501a3c5",
    "eventName":"Family",
    "services":"Clothing Donation",
    "date":"04/05/2022",
    "address": {
        "line1":"2131 Post Oak Blvd",
        "line2": "DICK's Sporting Goods",
        "city":"Houston",
        "county":"Harris",
        "zip":77056
	},
    "description":"Give Socks to People",
    "attendees": "633d90d921b379ae6f3a247b"
  }
```

### Query Params

|Param|value|
|---|---|
|eventDate|04/05/2022|
|updateBy|date|
|org_id|63352cb026eeaf51c501a3c5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: eventData by ID
This method PUTs new information into an existing event, provided that you have its existing global ID. This could be expanded to search by event name and organizational ID.
### Method: PUT
>```
>http://localhost:3000/eventData/update?id=633ee9c417f5a6873724dae0&updateBy=id
>```
### Body (**raw**)

```json
{
    "org_id": "63352cb026eeaf51c501a3c5",
    "eventName":"Sports Matters",
    "services":"Clothing Donation",
    "date":"04/05/2022",
    "address": {
        "line1":"2131 Post Oak Blvd",
        "line2": "DICK's Sporting Goods",
        "city":"Houston",
        "county":"Harris",
        "zip":77056
	},
    "description":"Give Socks to People",
    "attendees": "633d90d921b379ae6f3a247b"
  }
```

### Query Params

|Param|value|
|---|---|
|id|633ee9c417f5a6873724dae0|
|updateBy|id|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: eventData - Add more Attendees
This method PUTs more attendees into an existing event, provided that you have its existing global ID. This could be expanded to search by event name and organizational ID. Note that the attendees **are an array**. **No data other than the attendees should be sent in the body of the request.**
### Method: PUT
>```
>http://localhost:3000/eventData/updateAttendees?id=633ee9c417f5a6873724dae0
>```
### Body (**raw**)

```json
{
    "attendee":
            [
            "633c2ef86880b358bd7c923e",
            "633e6e782532d8103f36c17a"
        ]
  }
```

### Query Params

|Param|value|
|---|---|
|id|633ee9c417f5a6873724dae0|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: eventData by Event Name, Organization
**USE EXTREME CAUTION. THIS IS A HARD DELETE FUNCTION.**

This function **DELETES** en existing event by using its **event name** and **organizational** **ID**. **Two query parameters are required: the event name and the organizational ID.** This is used as a sanity check just to ensure that you really want to delete this event off the database. Additionally, this function only does a findOneAndDelete() through mongoose, so you cannot bulk delete events off the database.
### Method: DELETE
>```
>http://localhost:3000/eventData/delete?searchBy=name&eventName=Sports Matters&org_id=63352cb026eeaf51c501a3c5
>```
### Query Params

|Param|value|
|---|---|
|searchBy|name|
|eventName|Sports Matters|
|org_id|63352cb026eeaf51c501a3c5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: eventData by Event Date, Organization
**USE EXTREME CAUTION. THIS IS A HARD DELETE FUNCTION.**

This function **DELETES** en existing event by using its **event date** and **organizational** **ID**. **Two query parameters are required: the event date and the organizational ID.** This is used as a sanity check just to ensure that you really want to delete this event off the database. Additionally, this function only does a findOneAndDelete() through mongoose, so you cannot bulk delete events off the database.
### Method: DELETE
>```
>http://localhost:3000/eventData/delete?searchBy=date&eventDate=04/05/2022&org_id=63352cb026eeaf51c501a3c5
>```
### Query Params

|Param|value|
|---|---|
|searchBy|date|
|eventDate|04/05/2022|
|org_id|63352cb026eeaf51c501a3c5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: eventData by ID
**USE EXTREME CAUTION. THIS IS A HARD DELETE FUNCTION.**

This function **DELETES** en existing event by using its global mongoose ID. **Two query parameters are required: the global ID, and the organizational ID.** This is used as a sanity check just to ensure that you really want to delete this event off the database.
### Method: DELETE
>```
>http://localhost:3000/eventData/delete?searchBy=id&id=633ee9c417f5a6873724dae0
>```
### Query Params

|Param|value|
|---|---|
|searchBy|id|
|id|633ee9c417f5a6873724dae0|
|org_id|63352cb026eeaf51c501a3c5|



⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
# 📁 Collection: org Methods 


## End-point: Create Org
### Method: POST
>```
>http://localhost:3000/org/
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
>http://localhost:3000/org/
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Org by id
### Method: GET
>```
>http://localhost:3000/org/id/63352cb026eeaf51c501a3c5
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃

## End-point: Updating Org
### Method: PUT
>```
>http://localhost:3000/org/63352cb026eeaf51c501a3c5
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
>http://localhost:3000/org/id/633c3bed8f844442e638b6ee
>```

⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃ ⁃
_________________________________________________
Powered By: [postman-to-markdown](https://github.com/bautistaj/postman-to-markdown/)
