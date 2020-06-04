import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Incident } from '../interfaces/Incident.interface';
const incidentData: Incident[] = [
  {
    createDate: new Date(),
    title: 'lorem ipsum',
    status: true,
    author: 'giorgi',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    createDate: new Date('3/30/2020'),
    title: 'lorem ipsum',
    status: false,
    author: 'giorgi',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    createDate: new Date('1/21/2012'),
    title: 'lorem ipsum',
    status: true,
    author: 'giorgi',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    createDate: new Date('2/3/2011'),
    title: 'lorem ipsum',
    status: true,
    author: 'giorgi',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    createDate: new Date('1/23/2020'),
    title: 'lorem ipsum',
    status: false,
    author: 'giorgi',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    createDate: new Date('9/30/2005'),
    title: 'lorem ipsum',
    status: true,
    author: 'giorgi',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    createDate: new Date('3/30/2020'),
    title: 'lorem ipsum',
    status: false,
    author: 'giorgi',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    createDate: new Date('5/15/2015'),
    title: 'lorem ipsum',
    status: true,
    author: 'giorgi',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    createDate: new Date('7/18/2006'),
    title: 'lorem ipsum',
    status: false,
    author: 'giorgi',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
];
@Injectable({
  providedIn: 'root',
})
export class IncidentService {
  constructor(private authService: AuthService) {}
  getIncidents(): Incident[] {
    return incidentData;
  }
  filterIncidents(value: string): Incident[] {
    return incidentData.filter(
      (incident) => incident.author.indexOf(value) > -1
    );
  }
  addIncident(incident): void {
    incident.createDate = new Date();
    incident.author = this.authService.checkSession();
    incidentData.unshift(incident);
  }
}
