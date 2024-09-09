import { PenAdapter } from "./adapters/PenAdapter";
import { IPen } from "./interfaces/Pen";

export class AssignmentWork {
    private pen: IPen = {} as IPen;

    public getPen(): IPen {
        return this.pen
    }

    public setPen(pen: IPen): void {
        this.pen = pen;
    }

    public writeAssignment(str: string): void {
        this.pen.write(str);
    }
}