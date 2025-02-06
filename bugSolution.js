```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field1:1}});
//For handling cases where the field2 may not be a number, use $inc operator with a conditional check.  This assumes field2 may be null or have other non-numeric values initially
db.collection('myCollection').find({"_id":ObjectId("someId")}).forEach(function(doc){
  if(typeof doc.field2 === 'number'){
      db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field2:value}});
  }
});
```