const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const { config } = require('./config/config');
const authRoutes = require('./routes/auth');
const problemRoutes = require('./routes/problem');
const topicRoutes = require('./routes/topic');
const subtopicRoutes = require('./routes/subTopic');
const userRoutes = require('./routes/user');

const errorHandler = require('./middlewares/errorHandler');

const app = express();

dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(config.database.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/problem', problemRoutes);
app.use('/api/topic', topicRoutes);
app.use('/api/subtopic', subtopicRoutes);
app.use('/api/user', userRoutes);

app.use(errorHandler);

app.get('/', (req, res) => {
  res.send('Welcome to the DSA Backend!');
});

const PORT = config.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
