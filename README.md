# React + Express で Heroku にデプロイ

## Heroku デプロイ用に設定したもの

* Heroku用のポート設定
```javascript
const port = process.env.PORT || 3001;
```
* フロントエンドの index.html を参照できるようにパス設定
```javascript
app.use(express.static(path.join(__dirname, '../frontend/build')));

..omit..

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'../frontend/build/index.html'));
});
```
* Heroku デプロイ用の script 追加
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node backend/index.js",
    "heroku-postbuild": "cd frontend && npm install && npm run build"
},
```

## DEMO
[Hroku](https://react-express-heroku-itss.herokuapp.com/)
