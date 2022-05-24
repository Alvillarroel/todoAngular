import { Injectable } from '@angular/core';

export interface Service {
  id?: number;
  name: string;
  description: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private all: Service[] = [];

  constructor() { }

  
  public set add(service : Service) {
    this.all.push(service);
  }

  
  public edit(service : Service) {
    this.all.push({
      ...this.all,
      ...service
    });
  }
  
  
  public get services() : Service[] {
    return this.all;
  }
  
  
  public service(index: number) : Service {
    return this.all.filter(service => service.id === index).shift()!;
  }
  
}
