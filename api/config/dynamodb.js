import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutItemCommand, GetItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  region: "us-east-1",
});

export async function putItem(tableName, item) {
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
