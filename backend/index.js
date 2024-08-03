const express = require('express');
const { Client } = require('@elastic/elasticsearch');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const client = new Client({ node: 'http://elasticsearch:9200' });

const indexName = 'todos';

// Ensure the Elasticsearch index exists
async function ensureIndexExists() {
  const { body: indexExists } = await client.indices.exists({ index: indexName });
  if (!indexExists) {
    await client.indices.create({ index: indexName });
  }
}
ensureIndexExists().catch(console.error);

app.get('/todos', async (req, res) => {
  try {
    const { body } = await client.search({
      index: indexName,
      body: {
        query: {
          match_all: {},
        },
      },
    });
    const todos = body.hits.hits.map((hit) => ({
      id: hit._id,
      text: hit._source.todo,
    }));
    res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).send('Server error');
  }
});

app.post('/todos', async (req, res) => {
  const { todo } = req.body;
  try {
    await client.index({
      index: indexName,
      body: { todo },
    });
    res.status(201).send('Todo added');
  } catch (error) {
    console.error('Error adding todo:', error);
    res.status(500).send('Server error');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});