# copy_RT
RaiseTechサイトの模写



-----------------更新履歴-----------------

1/12～  scssをコンパイルしてcssを作成。レスポンシブを考える。
1/16    FLOCSSを意識してscssを作る。

2/7     スマホ対応時の画面をひとまず終了。
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

2/14    メモ
1.wrapの調整→paddingとmargin設定に解決策アリ

2/17～  リファクタリング開始
・クラス名の変更（FLOCSSに基づく）

2/24 リファクタリング終わり
　2/7の1.～3.まで全て対応

2/25～ レスポンシブ対応
p-philosophyのセンタリングがうまくいかない

2/27 _main.scss は一旦完了。

3/1～ headerレスポンシブ・リファクタリング開始

3/2 vertical-align: bottom;を加えることで、aタグとimgのズレを解消

3/5 spanをaタグ内に移動。本家のタグstatus確認

3/7～ strongの部分の修正

3/11 メニュー関係以外が完成

3/22 メニュー開始

～4/27 アコーディオンメニューについて、他で調整

4/28 アコーディオンメニュー作成開始

～5/4 モバイル版アコーディオンメニュー ほぼ終了

