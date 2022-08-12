import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import express from 'express';
import { AppRouter } from './AppRouter';

import './controllers/LoginController';
import { router } from './routes/loginRoutes';

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieSession({ keys: ['adgeqwugdf'] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
