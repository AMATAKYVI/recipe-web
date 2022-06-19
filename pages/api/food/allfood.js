// Hey
import { dummyFoodData } from '../../../dummyData';

export default function handler(req, res) {
  res.status(200).json(dummyFoodData);
}
