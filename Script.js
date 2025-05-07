const colorChangeBtn = document.getElementById('colorChangeBtn');
colorChangeBtn.addEventListener('click', () => {
  colorChangeBtn.style.backgroundColor = colorChangeBtn.style.backgroundColor === 'yellow' ? 'green' : 'yellow';
  colorChangeBtn.textContent = colorChangeBtn.style.backgroundColor === 'yellow' ? 'Yellow Color' : 'Green Color';
});

const hoverDiv = document.getElementById('hoverDiv');
hoverDiv.addEventListener('mouseover', () => {
  hoverDiv.style.backgroundColor = 'lightcoral';
});
hoverDiv.addEventListener('mouseout', () => {
  hoverDiv.style.backgroundColor = 'lightblue';
});

document.addEventListener('keypress', (event) => {
  console.log(`Key pressed: ${event.key}`);
});

const secretBtn = document.getElementById('colorChangeBtn');
let pressTimer;
secretBtn.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    alert("You long pressed!");
  }, 1000);
});
secretBtn.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});

let currentImageIndex = 1;
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

document.getElementById('next').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  document.getElementById('galleryImage').src = images[currentImageIndex];
});

document.getElementById('prev').addEventListener('click', () => {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  document.getElementById('galleryImage').src = images[currentImageIndex];
});

const tabButtons = document.querySelectorAll('.tabButton');
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    const targetTab = document.getElementById(targetId);
    
    document.querySelectorAll('.tabContent').forEach(tab => {
      tab.classList.remove('active');
    });
    
    targetTab.classList.add('active');
  });
});

const form = document.getElementById('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  
  if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) {
    alert('Please enter a valid email address.');
    return;
  }
  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    return;
  }
  
  alert('Form submitted successfully!');
});
