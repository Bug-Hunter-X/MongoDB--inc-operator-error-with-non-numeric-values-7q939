```javascript
//Incorrect usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1,field2:value}});
//In the above case, if the field2 value is not a number or is null, then the update operation will fail and throw an error.
```