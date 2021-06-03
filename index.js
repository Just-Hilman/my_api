import express from 'express';
import bodyParser from 'body-parser';

import laporanRoutes from './routes/laporan.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use('/laporan', laporanRoutes);

app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => console.log(`Server Running on port: http:localhost:${port}`));