import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contactsEntity";
import { IContactResponse } from "../../interfaces/contacts";
import { contactResponseSchema } from "../../schemas/contacts";

export const getContactByIdService = async (
  contactId: string
): Promise<IContactResponse> => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const contact = await contactRepo.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  const validateResponse = await contactResponseSchema.validate(contact, {
    stripUnknown: true,
  });

  return validateResponse;
};
