export class GameDetail {
  constructor(
    private readonly PK: string,
    private readonly SK: string,
    private readonly GSI1: string,
    private readonly GSI1_SK: string,
    private readonly entityType: string,
    private readonly gameId: string,
    private readonly gameCenterId: string,
    private readonly organizationId: string,
    private readonly brandId: string,
    private readonly gameLibraryId: string,
    private readonly game: string,
    private readonly type: string,
    private readonly background: string,
    private readonly identifierType: string,
    private readonly name: string,
    private readonly status: string,
    private readonly startDate: string,
    private readonly endDate: string,
  ) {}
}
