import { AssignmentWork } from "./AssignmentWork";
import { Notification } from "./Notification";
import { SendGridEmailProvider } from "./SendGridEmailProvider";
import { PilotPen } from "./PilotPen";
import { PenAdapter } from "./adapters/PenAdapter";
import { MailAdapter } from "./adapters/MailAdapter";

// const aw: AssignmentWork = new AssignmentWork();
// const penAdapter: PenAdapter = new PenAdapter();
// aw.setPen(penAdapter);
// aw.writeAssignment("I am bit tired to write this assignment");

const notification = new Notification();
const mailAdapter = new MailAdapter();
notification.setMailProvider(mailAdapter);
notification.sendEmail("admin@flarie.com", "jaidul@flarie.com");