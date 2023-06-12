const express = require('express');
const app = express();

app.get('/test', function (req, res) {
    return res.send('Hello');
});
app.listen(process.env.PORT || 8080, () => console.log("Express listening on PORT : 5500"));