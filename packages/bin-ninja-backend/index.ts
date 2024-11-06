import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { customerRouter } from './routes/customers';
import { paymentRouter } from './routes/payments';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/customers', customerRouter);
app.use('/api/payments', paymentRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});