import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Incident } from '../interfaces/Incident.interface';
const incidentData: Incident[] = [
  {
    id: '1',
    createDate: new Date(),
    title: 'lorem ipsum',
    status: true,
    author: 'giorgi@gmail.com',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    id: '2',
    createDate: new Date('3/30/2020'),
    title: 'lorem ipsum',
    status: false,
    author: 'irakli@gmail.com',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    id: '3',
    createDate: new Date('1/21/2012'),
    title: 'lorem ipsum',
    status: true,
    author: 'mariam@gmail.com',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    id: '4',
    createDate: new Date('2/3/2011'),
    title: 'lorem ipsum',
    status: true,
    author: 'nana@gmail.com',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    id: '5',
    createDate: new Date('1/23/2020'),
    title: 'lorem ipsum',
    status: false,
    author: 'maka@gmail.com',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    id: '6',
    createDate: new Date('9/30/2005'),
    title: 'lorem ipsum',
    status: true,
    author: 'nika@gmail.com',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    id: '7',
    createDate: new Date('3/30/2020'),
    title: 'lorem ipsum',
    status: false,
    author: 'zviadi@gmail.com',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    id: '8',
    createDate: new Date('5/15/2015'),
    title: 'lorem ipsum',
    status: true,
    author: 'teona@gmail.com',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus nulla sapiente cupiditate soluta facere qui expedita, eveniet tempore dolorum voluptate praesentium temporibus dolores similique incidunt nisi atque quisquam provident distinctio.',
    steps: [
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit',
      'Natus nulla sapiente cupiditate soluta facere qui expedita',
    ],
  },
  {
    id: '9',
    createDate: new Date('7/18/2006'),
    title: 'lorem ipsum',
    status: false,
    author: 'tina@gmail.com',
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
    incident.id = incidentData.length + 2;
    incidentData.unshift(incident);
  }
  changeIncidentStatus(id: string): Incident[] {
    return incidentData.map((incident: Incident) => {
      if (incident.id === id) {
        incident.status = !incident.status;
      }
      return incident;
    });
  }
}
