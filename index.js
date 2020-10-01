require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const Person = require('./models/Person');

const app = express();

morgan.token('request-content', (request, _response) => JSON.stringify(request.body));

const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'mal-formatted id' });
  }
  if (error.name === 'ValidationError') {
    return response.status(400).send({ error: error.message });
  }

  next(error);
};

app.use(express.static('build'));
app.use(express.json());
app.use(
  morgan(
    ':method :url :status :res[content-length] - :response-time ms :request-content',
  ),
);

app.get('/api/persons', (request, response) => {
  Person.find({}).then((persons) => response.json(persons));
});

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      if (person) {
        response.json(person);
      } else {
        response.status(404).end();
      }
    })
    .catch((error) => next(error));
});

app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndDelete(request.params.id)
    .then((_result) => {
      response.status(204).end();
    })
    .catch((error) => next(error));
});

app.post('/api/persons', (request, response, next) => {
  const { body } = request;

  if (!body.name) {
    return response.status(400).json({ error: 'the name is missing' });
  }
  if (!body.number) {
    return response.status(400).json({ error: 'the number is missing' });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });
  person
    .save()
    .then((savedPerson) => response.json(savedPerson))
    .catch((error) => next(error));
});

app.put('/api/persons/:id', (request, response, next) => {
  const { body } = request;
  const person = { number: body.number };

  Person.findByIdAndUpdate(request.params.id, person, {
    new: true,
    runValidators: true,
  })
    .then((updatedPerson) => {
      response.json(updatedPerson);
    })
    .catch((error) => next(error));
});

app.use(errorHandler);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
