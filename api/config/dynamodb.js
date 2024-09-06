import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  region: "us-east-1",
  accessKeyId: process.env.SECRET_ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});


export async function putItem(tableName, item) {
    console.log("Hey")
  const params = {
    TableName: tableName,
    Item: item,
  };

  try {
    const data = await client.send(new PutItemCommand(params));
    console.log("Success - item added", data);
  } catch (err) {
    console.log("Error", err);
  }
}
