export abstract class MySqlBaseEntity {
  protected insert() {
    console.log(`MySQL insert() called`);
  }
}
