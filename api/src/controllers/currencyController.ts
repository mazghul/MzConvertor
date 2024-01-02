import { Request, Response } from 'express';
import {convertCurrency, listCurrency} from '../utils/mockData';

export const getConversionRate = (req: Request, res: Response) => {
  const { to_currency } = req.params;
  const conversionData = convertCurrency(to_currency);
  if (conversionData) {
    res.json(conversionData);
  } else {
    res.status(404).send('Currency not found');
  }
};

export const listAll = (req: Request, res: Response) => {
  const conversionData = listCurrency();
  if (conversionData) {
    res.json(conversionData);
  } else {
    res.status(404).send('Not found');
  }
};
