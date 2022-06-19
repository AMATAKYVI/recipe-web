// Hey
import { dummyFoodData } from '../../../dummyData';

export default function handler(req, res) {
  const params = req;
  console.log(params.query.id);
  const data = dummyFoodData.filter((item) => item.id === params.query.id);
  res.status(404).json({ data: data });
}
