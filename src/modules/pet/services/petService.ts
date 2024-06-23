import Pet from "../../../models/pet";

export class PetService {
  public static async createPet(petData: {
    name: string;
    species: string;
    birthDate: Date;
    gender: string;
    userId: string;
  }): Promise<Pet> {
    return await Pet.create(petData);
  }
}
