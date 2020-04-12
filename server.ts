import compression from 'compression';
import express from 'express';
import path from 'path';

const app = express();

app.use(compression());
app.use('/', express.static('dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Listening on port: ${process.env.PORT}.`);
});
