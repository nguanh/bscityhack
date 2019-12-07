# Restful Server
Written in Python 2.7.10 with flask. As IDE, we are using PyCharm.

## Database
File name: formData.db

| id (primary key) | json (string) |
|:-:|:-:|
| 1 | {"id": 1, "json": "json"} |

## Paths
| path | method | data |
|:-:|:-:|:-:|
| host:5000/api/v1.0/test | get | json of jsons |
| host:5000/api/v1.0/test/integer(ID) | get | json |
| host:5000/api/v1.0/test | post | json |
| host:5000/api/v1.0/formdata/qr/integer(formtype-ID) | post | json from QR reader |


## Paths (future updates)
| path | method | data |
|:-:|:-:|:-:|
| host:5000/api/v1.0/formdata | post | json, new forms |
| host:5000/api/v1.0/formdata/integer(formtype-ID) | post | update form |
| host:5000/api/v1.0/formdata/integer(ID) | get | get form |
| host:5000/api/v1.0/formdata | get | get all forms |
