const server = require('./api/server.js');

const port = process.env.PORT || 8000
// const port = 8000
server.listen(port, () => console.log(`\nListening on port ${port}\n`));
