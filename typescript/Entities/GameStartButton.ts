import { MySqlBaseEntity } from './MySqlBaseEntity';
import { Style } from './Style';

export class GameStartButton extends MySqlBaseEntity {
  constructor(
    public PK: string = '',
    public SK: string = '',
    public entityType: string = 'GameStartButton',
    public gameId: string = '',
    public textWhenActive: string = '',
    public textBeforeStart: string = '',
    public textWhenExpire: string = '',
    public style: Style,
  ) {
    super();
  }

  public persist(): void {
    console.log(`Persisting to MySQL`);
    this.insert();
  }
}
