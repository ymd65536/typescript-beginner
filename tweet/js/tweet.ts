/*
cd ./tweet/js
tsc --sourcemap Twetter.ts
*/
class Main {
    // あいさつテーブル 0～29
    texts: string[] = [
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
    min: number = 0;
    // あいさつ最大
    max: number = 29;
    // ツイートテキスト
    tweetText: string = "";
    // 文字列テキストエリア。
    output: HTMLTextAreaElement;

    constructor() {
        this.output = <HTMLTextAreaElement>document.getElementById("output");
        this.createTweet();
        this.createButtons();
    }

    /**
     * ツイート文字列生成
     */
    private createTweet(): void {
        this.tweetText = "";
        this.tweetText = this.getText();
        this.display();
    }

    /**
     * ランダムにあいさつを作成
     */
    private getText(): string {
        return "みなさん、" + this.texts[Math.floor(Math.random() * (this.max + 1 - this.min)) + this.min]
    }

    /**
     * テキストエリアに文字を設定
     */
    private display(): void {
        this.output.value = this.tweetText;
    }

    /**
     * ボタンのイベント
     */
    private createButtons(): void {
        // あいさつ作成ボタン
        document.getElementById("createButton").addEventListener("click", () => this.createTweet());
        // あいさつツイートボタン
        document.getElementById("tweetButton").addEventListener("click", () => {
            // Twitter画面表示
            window.open("https://twitter.com/intent/tweet?text=" + encodeURI(this.tweetText));
        });
    }
}

// Mainクラスを実行する。
window.addEventListener("load", () => new Main());