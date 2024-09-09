import { GameViews } from "../../Entities/GameViews";

export class GameViewsBuilder {
  private PK: string = '';
  private SK: string = '';
  private entityType: string = 'GameViews';
  private gameId: string = '';
  private isEnable: boolean = false;

  public setPK(PK: string): GameViewsBuilder {
    this.PK = PK;
    return this;
  }

  public setSK(SK: string): GameViewsBuilder {
    this.SK = SK;
    return this;
  }

  public setEntityType(entityType: string): GameViewsBuilder {
    this.entityType = entityType;
    return this;
  }

  public setGameId(gameId: string): GameViewsBuilder {
    this.gameId = gameId;
    return this;
  }

  public setIsEnable(isEnable: boolean): GameViewsBuilder {
    this.isEnable = isEnable;
    return this;
  }

  public getGameViews(): GameViews {
    return new GameViews(this.PK, this.SK, this.entityType, this.gameId, this.isEnable);
  }
}
