# copy_RT
RaiseTechサイトの模写

1/12～ scssをコンパイルしてcssを作成。レスポンシブを考える。
1/16 FLOCSSを意識してscssを作る。

2/7 スマホ対応時の画面をひとまず終了。
残った修正点は以下。
1. wrapの調整
2. 白背景の高さ。
3. アイコン下説明文の中央寄せ

2/13
白背景部分が横に伸びているのは、
widthが100%のまま、ブレイクポイントに入った時に
max-widthが530pxだから、めいっぱいの530pxになっていたということが分かった。
解消するために、ブレイクポイントでwidth: autoに設定で解消。

黒背景が別クラスで設定していた理由が
レスポンシブ対応させるためだったということがようやくわかった。

2/14 メモ
1.wrapの調整→paddingとmargin設定に解決策アリ
