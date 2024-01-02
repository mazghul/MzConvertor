import { Router } from 'express'
import { getConversionRate, listAll } from '../controllers/currencyController'

const router = Router()

router.get('/convert/:to_currency', getConversionRate)

router.get('/list/all', listAll)

export default router
