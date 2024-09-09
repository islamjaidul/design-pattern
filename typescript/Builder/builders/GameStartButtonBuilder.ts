import { GameStartButton } from '../../entities/GameStartButton';
import { Style } from '../../entities/Style';

export class GameStartButtonBuilder {
  private PK: string = '';
  private SK: string = '';
  private entityType: string = '';
  private gameId: string = '';
  private textWhenActive: string = '';
  private textBeforeStart: string = '';
  private textWhenExpire: string = '';
  private style: Style = {
    position: 'Center',
    backgroundColor: '#FFFF',
    textColor: '#0000'
  } as unknown as Style

  public setPK(PK: string): GameStartButtonBuilder {
    this.PK = PK;
    return this;
  }

  public setSK(SK: string): GameStartButtonBuilder {
    this.SK = SK;
    return this;
  }

  public setEntityType(entityType: string): GameStartButtonBuilder {
    this.entityType = entityType;
    return this;
  }

  public setGameId(gameId: string): GameStartButtonBuilder {
    this.gameId = gameId;
    return this;
  }

  public setTextWhenActive(textWhenActive: string): GameStartButtonBuilder {
    this.textWhenActive = textWhenActive;
    return this;
  }

  public setTextBeforeStart(textBeforeStart: string): GameStartButtonBuilder {
    this.textBeforeStart = textBeforeStart;
    return this;
  }

  public setTextWhenExpire(textWhenExpire: string): GameStartButtonBuilder {
    this.textWhenExpire = textWhenExpire;
    return this;
  }

  public setStyle(style: Style): GameStartButtonBuilder {
    this.style = style;
    return this;
  }

  public getGameStartButton(): GameStartButton {
    return new GameStartButton(
      this.PK,
      this.SK,
      this.entityType,
      this.gameId,
      this.textWhenActive,
      this.textBeforeStart,
      this.textWhenExpire,
      this.style,
    );
  }
}
