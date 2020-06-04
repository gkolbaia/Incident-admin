export interface Incident {
  author: string;
  title: string;
  description: string;
  createDate: Date;
  steps: string[];
  status: boolean;
}
