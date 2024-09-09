import { GameDetail } from '../entities/GameDetail';

export class GameDetailBuilder {
  private PK: string = '';
  private SK: string = '';
  private GSI1: string = '';
  private GSI1_SK: string = '';
  private entityType: string = '';
  private gameId: string = '';
  private gameCenterId: string = '';
  private organizationId: string = '';
  private brandId: string = '';
  private gameLibraryId: string = '';
  private game: string = '';
  private type: string = '';
  private background: string = '';
  private identifierType: string = '';
  private name: string = '';
  private status: string = '';
  private startDate: string = '';
  private endDate: string = '';

  public setPK(PK: string): GameDetailBuilder {
    this.PK = PK;
    return this;
  }

  public setSK(SK: string): GameDetailBuilder {
    this.SK = SK;
    return this;
  }

  public setGSI1(GSI1: string): GameDetailBuilder {
    this.GSI1 = GSI1;
    return this;
  }

  public setGSI1_SK(GSI1_SK: string): GameDetailBuilder {
    this.GSI1_SK = GSI1_SK;
    return this;
  }

  public setEntityType(entityType: string): GameDetailBuilder {
    this.entityType = entityType;
    return this;
  }

  public setGameId(gameId: string): GameDetailBuilder {
    this.gameId = gameId;
    return this;
  }

  public setGameCenterId(gameCenterId: string): GameDetailBuilder {
    this.gameCenterId = gameCenterId;
    return this;
  }

  public setOrganizationId(organizationId: string): GameDetailBuilder {
    this.organizationId = organizationId;
    return this;
  }

  public setBrandId(brandId: string): GameDetailBuilder {
    this.brandId = brandId;
    return this;
  }

  public setGameLibraryId(gameLibraryId: string): GameDetailBuilder {
    this.gameLibraryId = gameLibraryId;
    return this;
  }

  public setGame(game: string): GameDetailBuilder {
    this.game = game;
    return this;
  }

  public setType(type: string): GameDetailBuilder {
    this.type = type;
    return this;
  }

  public setBackground(background: string): GameDetailBuilder {
    this.background = background;
    return this;
  }

  public setIdentifierType(identifierType: string): GameDetailBuilder {
    this.identifierType = identifierType;
    return this;
  }

  public setName(name: string): GameDetailBuilder {
    this.name = name;
    return this;
  }

  public setStatus(status: string): GameDetailBuilder {
    this.status = status;
    return this;
  }

  public setStartDate(startDate: string): GameDetailBuilder {
    this.startDate = startDate;
    return this;
  }

  public setEndDate(endDate: string): GameDetailBuilder {
    this.endDate = endDate;
    return this;
  }

  public getGameDetail(): GameDetail {
    return new GameDetail(
      this.PK,
      this.SK,
      this.GSI1,
      this.GSI1_SK,
      this.entityType,
      this.gameId,
      this.gameCenterId,
      this.organizationId,
      this.brandId,
      this.gameLibraryId,
      this.game,
      this.type,
      this.background,
      this.identifierType,
      this.name,
      this.status,
      this.startDate,
      this.endDate,
    );
  }
}
