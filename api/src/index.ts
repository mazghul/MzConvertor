import express from 'express';
import currencyRoutes from './routes/currencyRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/currency', currencyRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
