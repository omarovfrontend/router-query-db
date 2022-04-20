const express = require('express');
const path = require('path');
const app = express();

const userRouter = require('./routers/user');
const postsRouter = require('./routers/posts');

const PORT = 3000;

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));  //дает возможность получить любой файл из этой папки
app.use(express.json());
app.use(express.urlencoded({extends: true}));

app.use('/user', userRouter);
app.use('/posts', postsRouter);

app.get('/', (req, res) => {
  res.redirect('/user');
});

app.use((req, res) => {
  res.status(404).send('ooops!');
});


app.listen(PORT, () => console.log('server on:', PORT));
