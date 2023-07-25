import { EventSubscriber, EntitySubscriberInterface } from "typeorm";
import { User } from "./User.entity";

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface {
  listenTo(): any {
    return User;
  }
}
