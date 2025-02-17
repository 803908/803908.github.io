let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");
let starContainer = document.getElementById("star-container");

let clickCount = 0;  // 记录点击 No 的次数
//星星
// No 按钮的文字变化
const noTexts = [
    "不是，你别做梦了",
    "你要是美女，我就是刘亦菲",
    "。。。。。。 ",
    "不是！",
    "无语",
    "人要有自知之明",
    "你不是！",
    "不是！",
    "无语。。。"
];

// No 按钮点击事件
noButton.addEventListener("click", function() {
    clickCount++;

    // 让 Yes 变大，每次放大 2 倍
    let yesSize = 1 + (clickCount * 1.2);
    yesButton.style.transform = `scale(${yesSize})`;

    // 挤压 No 按钮，每次右移 100px
    let noOffset = clickCount * 80;
    noButton.style.transform = `translateX(${noOffset}px)`;

    // **新增：让图片和文字往上移动**
    let moveUp = clickCount * 25; // 每次上移 20px
    mainImage.style.transform = `translateY(-${moveUp}px)`;
    questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化（前 5 次变化）
    if (clickCount <= 5) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化（前 5 次变化）
    if (clickCount === 1) mainImage.src = "images/震惊.png"; // 震惊
    if (clickCount === 2) mainImage.src = "images/思考.png";   // 思考
    if (clickCount === 3) mainImage.src = "images/生气.png";   // 生气
    if (clickCount === 4) mainImage.src = "images/哭.png";  // 哭
    if (clickCount >= 5) mainImage.src = "images/大哭.png";  // 之后一直是哭

});

// Yes 按钮点击后，进入表白成功页面
yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">!!!我就知道!!!你最有眼光啦!!!嘿嘿 ( >᎑<)♡︎ᐝ</h1>
            <img src="images/我最喜欢你了.png" alt="拥抱" class="yes-image">
        </div>
    `;
    document.body.style.overflow = "hidden";
});