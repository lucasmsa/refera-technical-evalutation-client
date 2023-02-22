export interface Order {
  id: string;
  category: Contact;
  contact: string;
  agency: string;
  company: string;
  deadline: string;
}

interface Contact {
  name: string;
}
