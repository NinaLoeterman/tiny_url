import { EventSubscriber, EntitySubscriberInterface } from "typeorm";
import { User } from "./User";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface {
  listenTo(): any {
    return User;
  }
}
