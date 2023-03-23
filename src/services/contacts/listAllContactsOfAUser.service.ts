import { AppDataSource } from "../../data-source";
import { User } from "../../entities/usersEntity";
import { IContactWithoutUserResponse } from "../../interfaces/contacts";
import { contactArraySchema } from "../../schemas/contacts";

export const listAllContactsOfAUserService = async (
  tokenId: string
): Promise<IContactWithoutUserResponse[] | undefined> => {
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOne({
    where: {
      id: tokenId,
    },
    relations: {
      contacts: true,
    },
  });

  const validateResponse = await contactArraySchema.validate(user!.contacts, {
    stripUnknown: true,
  });

  return validateResponse;
};
