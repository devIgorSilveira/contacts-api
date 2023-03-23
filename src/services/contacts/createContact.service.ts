import { Contact } from "../../entities/contactsEntity";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/usersEntity";
import {
  IContactResponse,
  ICreateContactBody,
} from "../../interfaces/contacts";
import { contactResponseSchema } from "../../schemas/contacts";

export const createContactService = async (
  body: ICreateContactBody,
  tokenId: string
): Promise<IContactResponse> => {
  const contactRepo = AppDataSource.getRepository(Contact);
  const userRepo = AppDataSource.getRepository(User);

  const user = await userRepo.findOneBy({ id: tokenId });

  const newContact = contactRepo.create({
    ...body,
    user: user as User,
  });

  await contactRepo.save(newContact);

  const validateResponse = await contactResponseSchema.validate(newContact, {
    stripUnknown: true,
  });

  return validateResponse;
};
