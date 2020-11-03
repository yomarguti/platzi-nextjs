import DB from '../../../database/db';

const allAvos = async (request, response) => {
  const db = new DB();
  const allEntries = await db.getAll();
  const length = allEntries.length;

  response.statusCode = 200;
  response.setHeader('Content-type', 'application/json');
  response.end(JSON.stringify({ data: allEntries, length }));
};

export default allAvos;
