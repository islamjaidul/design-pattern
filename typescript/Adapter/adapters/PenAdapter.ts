import { PilotPen } from "../PilotPen";
import { IPen } from "../interfaces/Pen";

export class PenAdapter implements IPen {
    private pp: PilotPen = new PilotPen()
    write(input: string): void {
        this.pp.mark(input)
    }
}