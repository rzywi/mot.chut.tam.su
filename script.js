const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const main = document.querySelector('.main');
const displayText = document.getElementById('displayText');
const btncontinue = document.getElementById('btn-continue');

startBtn.onclick = () => {
    popupInfo.classList.add('active');
    main.classList.add('active');
};

const texts = [
    "Tui 07 nhe ( maket t1 )",
    "Tui thich nghe nhac buon mac du cha biet mình buon vi cgi..",
    "Tui thich choi game nua ( liqi la chu yeu )",
    "Tui nhát lam, nhạt nua, ít khi chủ động..",
    "Sieu chung thuy luon, mong cậu cũng the..",
    "Và chủ động nhieu hon voi tuii ( lam phien tui cung duoc )",
    "Điều cuối ne, tui rep chậm chu yeu la do tui khong biet noi gii",
    "Chúc cậu một ngày thật vui vẻ 🫶"
];

let currentIndex = 0;
let locked = false; // khóa khi đang chuyển hiệu ứng

btncontinue.addEventListener("click", () => {
    if (locked) return;
    locked = true;

    displayText.style.opacity = 0;

    setTimeout(() => {
        // nếu chưa phải câu cuối → tăng index
        if (currentIndex < texts.length - 1) {
            currentIndex++;
            displayText.textContent = texts[currentIndex];

            // đến câu cuối → đổi nút
            if (currentIndex === texts.length - 1) {
                btncontinue.textContent = "Het roii";
            }
        } else {
            // nếu đang ở câu cuối + nhấn nữa → chuyển link
            window.location.href = "https://m.me/ngch.rz";
            return;
        }

        // hiệu ứng fade in
        displayText.style.opacity = 1;

        // mở khóa sau khi hoàn tất animation
        setTimeout(() => {
            locked = false;
        }, 700);

    }, 700);
});



