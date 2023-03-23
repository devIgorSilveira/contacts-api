import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contactsEntity";
import { AppError } from "../../errors/error";
import {
  IContactWithoutUserResponse,
  IPatchContactBody,
} from "../../interfaces/contacts";
import { contactResponseWithoutUSerSchema } from "../../schemas/contacts";

export const patchContactService = async (
  body: IPatchContactBody,
  contactId: string,
  tokenId: string
): Promise<IContactWithoutUserResponse> => {
  const contactRepo = AppDataSource.getRepository(Contact);

  let contact = await contactRepo.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (contact!.user.id != tokenId) {
    throw new AppError("You can't do that", 401);
  }

  const newData = {
    first_name: body.first_name
      ? body.first_name
      : (contact?.first_name as string),
    last_name: body.last_name ? body.last_name : (contact?.last_name as string),
    email: body.email ? body.email : (contact?.email as string),
    phone: body.phone ? body.phone : (contact?.phone as string),
  };

  await contactRepo.save({ id: contactId, ...newData });

  contact = await contactRepo.findOneBy({ id: contactId });

  const validateResponse = await contactResponseWithoutUSerSchema.validate(
    contact,
    {
      stripUnknown: true,
    }
  );

  return validateResponse;
};
