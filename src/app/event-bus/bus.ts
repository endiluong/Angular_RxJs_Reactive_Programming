import * as _ from 'lodash';

export interface Observer {
  notify(data: any);
}

interface Subject {
  registerObserver(obs: Observer);
  unRegisterObserver(obs: Observer);
  notifyObserver(data: any);
}

class EventBus implements Subject {
  private observers: Observer[] = [];

  registerObserver(obs: Observer) {
    this.observers.push(obs);
  }
  unRegisterObserver(obs: Observer) {

  }
  notifyObserver(obs: Observer) {}
}
