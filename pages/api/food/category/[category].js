import { dummyFoodData } from '../../../../dummyData';

export default function handler(req, res) {
  const params = req;
  console.log(params.category);
  const data = dummyFoodData.filter(
    (item) => item.category === params.query.category.toLowerCase()
  );
  res.status(200).json({ data: data });
}
