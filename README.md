
## Usage

[WordPressのテーマ作成( vccw + Gulp + Pug + Sass + browerSync )](https://qiita.com/satokibi/items/a56d3d0f1313a9897f7e)

wordpressのthemesフォルダ内で

```terminal:terminal
git clone https://github.com/satokibi/wordpress_template.git
cd wordpress_template
npm i

gulp pug
gulp sass
```


http://192.168.33.10/wp-login.php/

wordpressにログインし、`WordPress Template`のテーマを有効化する。


```terminal:terminal
gulp
```

ブラウザが開き、pugファイルやscssiファイルを編集すると
ブラウザが自動でリロードします。
