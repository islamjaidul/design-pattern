import { PersistanceFactory } from './factories/PersistanceFactory'

const persistanceFactory = new PersistanceFactory()
const gameStartButton = persistanceFactory.createPersistance('GameStartButton', {entityType: 'Modified GameStartButton Entity'});
console.log(gameStartButton)
gameStartButton?.persist();