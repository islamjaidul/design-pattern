export abstract class DynamoDbBaseEntity {
  protected putItem() {
    console.log(`DynamoDB putItem() called`);
  }
}
