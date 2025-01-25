

// for counter 
const myNum = document.querySelectorAll('.count')
// console.log(myNum.innerText)
let speed = 20;

myNum.forEach( (myCount) => {
    
    
    let target_count = myCount.dataset.count;
    let init_count = +myCount.innerText;
    // console.log(target_count)
    
    let new_increment_num = Math.floor(target_count / speed);
    
    const updateNumber = () => {
        init_count +=  new_increment_num;
        myCount.innerText = init_count;
        
        if(init_count < target_count){
            setTimeout(() => {updateNumber()}, 5)
        }
    }
    
    updateNumber();
    
})







// navbar section and carousel section javascript code 

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      console.log("scrolled")
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// custom progressbar
const carousel = document.querySelector('#carouselExampleAutoplaying');
const circles = document.querySelectorAll('.circle');
const interval = 5000; // Bootstrap default interval (5 seconds)

let activeIndex = 0;
let progressInterval;

// Update progress bars
const updateProgress = () => {
circles.forEach((circle, index) => {
  const progress = circle.querySelector('.progress');
  if (index === activeIndex) {
    let progressValue = 0;
    progressInterval = setInterval(() => {
      progressValue += 2; // Increase progress every 100ms
      progress.style.setProperty('--progress', progressValue / 100);
    if (progressValue >= 100) clearInterval(progressInterval);
    }, interval / 50); // 50 steps
    }
  //   else {
  //   progress.style.setProperty('--progress', 0);
  // }
});
};

// Event listener for slide changes
const resetIndicators = () => {
circles.forEach(circle => {
const progress = circle.querySelector('.progress');
progress.style.setProperty('--progress', 0); // Reset progress
});
};
carousel.addEventListener('slid.bs.carousel', () => {
// activeIndex = [...carousel.querySelectorAll('.carousel-item')].findIndex(item =>
//   item.classList.contains('active'),
//   console.log('active element found')
// );
const items = carousel.querySelectorAll('.carousel-item');

// Update the active index
  activeIndex = [...items].findIndex(item => item.classList.contains('active'));

// Check if we are starting a new cycle
   if (activeIndex === 0) {
    resetIndicators(); // Reset all indicators at the start of a new cycle
  }

clearInterval(progressInterval); // Clear any existing intervals
updateProgress(); // Restart progress
});

// Initialize progress bars
updateProgress();



