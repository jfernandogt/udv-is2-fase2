// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import getCache from '@/utils/myCache';
import { v4 as uuidv4 } from "uuid";

export default function handler(req, res) {
  const myCache = getCache()
  if (req.method === "POST") {
    const id = `ingredient-${uuidv4()}`;
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
  } else if (req.method === 'GET') {
    try {
      const value = myCache.keys()
      if (!value) {
        res.status(200).json([])
      }
      const result = value.reduce((prev, k) => {
        if (k.startsWith('ingredient')) {
          return [...prev, myCache.get(k)]
        }
        return prev;
      }, [])
      
      res.status(200).json(result);
    } catch (e) {
      res.status(500).send(e.message ?? 'Error fetching the ingredient')
    }
  }
}
