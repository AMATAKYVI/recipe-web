// Hey
import { dummyFoodData } from '../../../dummyData';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const query = req.body.query;
    console.log(query.replace(/\s/g, ''));
    const searchData = dummyFoodData.filter((item) =>
      item.searchString.startsWith(query.replace(/\s/g, ''))
    );
    res.status(200).json([{ message: query, data: searchData }]);
  } else {
    res.status(404).json({ errorMsg: 'this is error' });
  }
}
