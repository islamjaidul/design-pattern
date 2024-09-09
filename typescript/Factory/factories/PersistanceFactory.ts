import { GameStartButtonBuilder } from "../../Builder/builders/GameStartButtonBuilder";
import { GameViewsBuilder } from "../../Builder/builders/GameViewsBuilder";
import { GameViews } from "../../Entities/GameViews";
import { GameStartButton } from "../../entities/GameStartButton";

export class PersistanceFactory {
    public createPersistance(entityType: string, payload: {entityType: string}): GameStartButton|GameViews|null {
        if (entityType === 'GameStartButton') {
            const gameStartButtonBuilder = new GameStartButtonBuilder();
            const gameStartButton: GameStartButton = gameStartButtonBuilder.setEntityType(payload.entityType).getGameStartButton();
            return gameStartButton;
        } else if (entityType === 'GameViews') {
            const gameViewsBuilder = new GameViewsBuilder();
            const gameViews: GameViews = gameViewsBuilder.setEntityType(payload.entityType).getGameViews();
            return gameViews;
        }
        return null;
    }
}