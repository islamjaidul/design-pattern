import { GameDetailBuilder } from './builders/GameDetailBuilder';
import { PhoneBuilder } from './builders/PhoneBuilder';
import { GameDetail } from './entities/GameDetail';
import { Phone } from './entities/Phone';

const phoneBuilder: PhoneBuilder = new PhoneBuilder();
phoneBuilder.setOs('IOS').setBattery(3000);
const phone: Phone = phoneBuilder.getPhone();
console.log(phone);

const gameDetailBuilder: GameDetailBuilder = new GameDetailBuilder();
gameDetailBuilder.setPK('PK').setSK('SK').setGSI1('GSI1').setGSI1_SK('GSI1_SK');
const gameDetail: GameDetail = gameDetailBuilder.getGameDetail();
console.log(gameDetail);
