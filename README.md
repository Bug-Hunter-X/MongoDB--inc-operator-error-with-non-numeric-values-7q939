# MongoDB $inc operator error with non-numeric values
This repository demonstrates a common error when using the `$inc` operator in MongoDB: attempting to increment a field with a non-numeric value or null.  The `bug.js` file shows the erroneous code, and `bugSolution.js` provides the corrected version.

The problem arises when using `$inc` with a field containing non-numeric data.  This will lead to an error and the update operation will fail. The solution involves ensuring data integrity and handling potential null values before using the `$inc` operator.