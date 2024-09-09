import { Phone } from '../entities/Phone';

export class PhoneBuilder {
  private os: string = '';
  private processor: string = '';
  private screenSize: number = 0;
  private battery: number = 0;
  private camera: string = '';

  public setOs(os: string): PhoneBuilder {
    this.os = os;
    return this;
  }

  public setProcessor(processor: string): PhoneBuilder {
    this.processor = processor;
    return this;
  }

  public setScreenSize(screenSize: number): PhoneBuilder {
    this.screenSize = screenSize;
    return this;
  }

  public setBattery(battery: number): PhoneBuilder {
    this.battery = battery;
    return this;
  }

  public setCamera(camera: string): PhoneBuilder {
    this.camera = camera;
    return this;
  }

  public getPhone(): Phone {
    return new Phone(this.os, this.processor, this.screenSize, this.battery, this.camera);
  }
}
