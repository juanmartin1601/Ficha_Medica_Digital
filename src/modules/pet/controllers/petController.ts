import { Request, Response } from "express";
import Pet from "../../../models/pet";
import { PetService } from "../services/petService";

class PetController {
  public async createPet(req: Request, res: Response): Promise<void> {
    try {
      const { name, species, birthDate, gender, userId } = req.body;
      const newPet: Pet = await PetService.createPet({
        name,
        species,
        birthDate,
        gender,
        userId,
      });
      res.status(201).json(newPet);
    } catch (error) {
      res.status(500).json({ error: "Error creating pet" });
    }
  }

  public async getPetsByUserId(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const pets: Pet[] = await PetService.getPetsByUserId(userId);
      res.status(200).json(pets);
    } catch (error) {
      res.status(500).json({ error: "Error fetching pets" });
    }
  }
}

export default new PetController();
