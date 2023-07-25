import { EventSubscriber, EntitySubscriberInterface } from "typeorm";
import { Url } from "./Url.entity";

@EventSubscriber()
export class UrlSubscriber implements EntitySubscriberInterface {
  listenTo(): any {
    return Url;
  }
}
