import * as dynamoDbLib from '../libs/dynamodb-lib';
import { success, failure } from '../libs/response-lib';

export const main = async (event, context, callback) => {
  const userId = event.requestContext.identity.cognitoIdentityId;
  const noteId = event.pathParameters.id;

  const params = { TableName: process.env.tableName, Key: { userId, noteId } };

  try {
    const result = await dynamoDbLib.call('get', params);
    if (result.Item) {
      callback(null, success(result.Item));
    } else {
      callback(null, failure({ status: false, error: 'Item not found' }, 404));
    }
  } catch (error) {
    callback(null, failure({ status: false, error }));
  }
};
