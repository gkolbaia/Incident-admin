export interface Incident {
  id: string;
  author: string;
  title: string;
  description: string;
  createDate: Date;
  steps: string[];
  status: boolean;
}
