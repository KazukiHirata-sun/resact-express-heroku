const express = require('express')
const app = express()
const path = require('path');

// ① Herokuでポートが設定できるようにprocess.env.PORTを設定
const port = process.env.PORT || 3001;

// ② Reactのindex.htmlファイルを参照できるようにパスを設定
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from BE!" });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'));
});

app.listen(port, () => {
  console.log(`listening on *:${port}`);
})