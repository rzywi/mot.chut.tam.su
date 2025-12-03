const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const main = document.querySelector('.main');
const displayText = document.getElementById('displayText');
const btncontinue = document.getElementById('btn-continue')

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
}

const texts = [
    "Tui sap 19 tuoi roi ( maket t1 )",
    "Tui thich nghe nhac buon mac du cha biet mình buon vi cgi..",
    "Tui thich choi game nua ( liqi la chu yeu )",
    "Tui nhát lam, nhạt nua, ít khi chủ động..",
    "Sieu chung thuy luon, mong cậu cũng the..",
    "Và chủ động nhieu hon voi tuii ( lam phien tui cung duoc )",
    "Điều cuối ne, tui rep chậm chu yeu la do tui khong biet noi gii",
    "Chúc cậu một ngày thật vui vẻ 🫶"
];

let currentIndex = 0;
let isTransitioning = false; // trạng thái đang fade

btncontinue.addEventListener('click', () => {
    if (isTransitioning) return; // nếu đang chuyển chữ, bỏ qua click

    isTransitioning = true; // khóa nút
    displayText.style.transition = "opacity .7s";
    displayText.style.opacity = 0;

    setTimeout(() => {
        if (currentIndex < texts.length - 1) {
            currentIndex++;
            displayText.textContent = texts[currentIndex];

            // Nếu đã là chữ cuối, đổi nút
            if (currentIndex === texts.length - 1) {
                btncontinue.innerHTML = "Het roii"; // thay icon bằng chữ
                // hoặc btncontinue.textContent = "Hoàn tất";
            }
        }

        // chữ hiện lại
        displayText.style.opacity = 1;

        // Nếu là chữ cuối và người nhấn nút lần nữa, mở link
        if (currentIndex === texts.length - 1 && btncontinue.innerHTML === "Het roii") {
            btncontinue.addEventListener('click', () => {
                window.location.href = "https://m.me/ngch.rz"; // link muốn chuyển
            }, { once: true }); // chỉ chạy 1 lần
        }
        setTimeout(() => {
            isTransitioning = false;
        }, 700); // thời gian fade in = 1s
    }, 700);
    
});