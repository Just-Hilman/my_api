import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);



app.listen(port, () => console.log(`Server Running on port: http:localhost:${port}`));