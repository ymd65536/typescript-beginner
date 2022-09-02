/*
cd ./tweet/js
tsc --sourcemap Twetter.ts
*/
var Main = /** @class */ (function () {
    function Main() {
        // あいさつテーブル 0～29
        this.texts = [
            "どうも",
            "ありがとうございます",
            "いただきます",
            "ごちそうさまでした",
            "ごめんください",
            "いってらっしゃい",
            "いってまいります",
            "ごめんなさい",
            "こんばんは",
            "おかえりなさい",
            "ただいま",
            "さようなら",
            "おかげさまで",
            "しつれいしました",
            "おげんきで",
            "しつれいします",
            "おだいじに",
            "すみません",
            "おねがいします",
            "それはいけませんね",
            "おはようございます",
            "お待たせいたしました",
            "では、また",
            "おめでとうございます",
            "どういたしまして",
            "おやすみなさい",
            "はじめまして",
            "かしこまりました",
            "よく、いらっしゃいました",
            "よろしく"
        ];
        // あいさつ最小
        this.min = 0;
        // あいさつ最大
        this.max = 29;
        // ツイートテキスト
        this.tweetText = "";
        this.output = document.getElementById("output");
        this.createTweet();
        this.createButtons();
    }
    /**
     * ツイート文字列生成
     */
    Main.prototype.createTweet = function () {
        this.tweetText = "";
        this.tweetText = this.getText();
        this.display();
    };
    /**
     * ランダムにあいさつを作成
     */
    Main.prototype.getText = function () {
        return "みなさん、" + this.texts[Math.floor(Math.random() * (this.max + 1 - this.min)) + this.min];
    };
    /**
     * テキストエリアに文字を設定
     */
    Main.prototype.display = function () {
        this.output.value = this.tweetText;
    };
    /**
     * ボタンのイベント
     */
    Main.prototype.createButtons = function () {
        var _this = this;
        // あいさつ作成ボタン
        document.getElementById("createButton").addEventListener("click", function () { return _this.createTweet(); });
        // あいさつツイートボタン
        document.getElementById("tweetButton").addEventListener("click", function () {
            // Twitter画面表示
            window.open("https://twitter.com/intent/tweet?text=" + encodeURI(_this.tweetText));
        });
    };
    return Main;
}());
// Mainクラスを実行する。
window.addEventListener("load", function () { return new Main(); });
//# sourceMappingURL=tweet.js.map