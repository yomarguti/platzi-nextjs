import DB from '../../../database/db';

const aAvo = async (request, response) => {
  const db = new DB();

  const id = request.query.id;

  const entry = await db.getById(id);

  response.status(200).json(entry);
};

export default aAvo;
