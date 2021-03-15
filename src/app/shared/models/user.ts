import { Company } from './company';

export class User {
  id: Number;
  name: String;
  email: String;
  website: String;
  company: Company;

  constructor() {
    this.id = 0;
    this.name = '';
    this.email = '';
    this.website = '';
    this.company = {
      name: '',
      bs: '',
      catchPhrase: '',
    };
  }
}
