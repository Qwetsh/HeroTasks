const { getDataConnect, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'default',
  service: 'gamify-taches',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

