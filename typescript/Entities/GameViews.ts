import { DynamoDbBaseEntity } from './DynamoDbBaseEntity';

export class GameViews extends DynamoDbBaseEntity {
  constructor(
    public PK: string = '',
    public SK: string = '',
    public entityType: string = 'GameViews',
    public gameId: string = '',
    public isEnable: boolean = false,
  ) {
    super();
  }

  public persist(): void {
    console.log(`Persisting to DynamoDB`);
    this.putItem();
  }
}
