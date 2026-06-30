document.addEventListener('DOMContentLoaded', () => {
console.log('Portfolio của Đặng Hoài Nhân đã load xong!');
alert('Chào mừng bạn đến với portfolio thật trên Internet của mình!');
});
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  // Đổi chữ trên nút bấm để người dùng dễ biết
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Chuyển Chế Độ Sáng';
  } else {
    themeToggle.textContent = 'Chuyển Chế Độ Tối';
  }
});
const faders = document.querySelectorAll('.project-card, section'); // Áp dụng cho các card dự án và các section

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target); // Xuất hiện một lần rồi giữ nguyên
    }
  });
}, { threshold: 0.15 }); // Xuất hiện khi phần tử lộ ra 15% trên màn hình

faders.forEach(fader => {
  fader.classList.add('fade-in'); // Tự động cài trạng thái ẩn ban đầu
  appearOnScroll.observe(fader);
});