import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contactsEntity";
import { AppError } from "../../errors/error";

export const deleteContactService = async (
  contactId: string,
  tokenId: string
): Promise<object> => {
  const contactRepo = AppDataSource.getRepository(Contact);

  const contact = await contactRepo.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (contact?.user.id != tokenId) {
    throw new AppError("You can't do that", 401);
  }

  await contactRepo.delete(contactId);

  return {};
};
