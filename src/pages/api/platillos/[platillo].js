import getCache from '@/utils/myCache';

export default function handler(req, res) {
  const myCache = getCache()
  const id = req.query.platillo

  if(!id) {
    res.status(400).send('Falta el id')
  }

  if (req.method === 'GET') {
    const value = myCache.get(id)
    if (!value) {
      res.status(500).send('No se encontró el platillo')
      return;
    }
    res.status(200).json(value);
  } else if (req.method === 'PUT') {
    const { title } = req.body;
    const success = myCache.set(
      id,
      {
        id,
        title,
      },
      0
    );
    if (!success) {
      res.status(500).send('Error')
      return;
    }
    res.status(200).json({
      id,
      title,
    });
  } else if (req.method === 'DELETE') {
    const result = myCache.del(id)
    res.status(200).json({
      result
    });
  } 
}
