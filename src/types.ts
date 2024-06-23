// interfaces de las entidades
export interface User {
  id: string;
  name: string;
  dni: string;
  address: string;
  email: string;
}

export interface Pet {
  id: string;
  name: string;
  species: string;
  birthDate: Date;
  gender: Gender;
  userId: string;
}

export interface MedicalRecord {
  id: string;
  title: string;
  category: string;
  description: string;
  petId: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Unknown = "unknown",
}
