searchform = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
  searchform.classList.toggle('active');
}


document.addEventListener('DOMContentLoaded', function(){
  const userBtn = document.getElementById('login-btn');
  const profileSection = document.querySelector('.profile');
  userBtn.addEventListener('click', function() {
      profileSection.style.display = profileSection.style.display === 'none' ? 'block' : 'none';
  });
  const userEmailFromStorage = localStorage.getItem('userEmail');
  if (userEmailFromStorage) {
      document.getElementById('user-email').textContent = userEmailFromStorage;
  }
  else {
      window.location.href = 'login.html';
}
  document.getElementById('logout-btn').addEventListener('click', function() {
      localStorage.removeItem('userEmail');
      window.location.href = 'login.html';
  });
  document.getElementById('close-login-btn').addEventListener('click', function() {
      profileSection.style.display = 'none';
  });
});


var swiper = new Swiper(".books-list", {
  loop:true,
  centeredSlides:true,
  autoplay:{
    delay:9500,
    disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView:1,
    },
    768: {
      slidesPerView:2,
    },
    1024: {
      slidesPerView:3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween:10,
  loop:true,
  centeredSlides:true,
  autoplay:{
    delay:9500,
    disableOnInteraction:false,
  },
 navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
  breakpoints: {
    0: {
      slidesPerView:1,
    },
    450: {
      slidesPerView:2,
    },
    768: {
      slidesPerView:3,
    },
    1024: {
      slidesPerView:4,
    },
  },
});

var swiper = new Swiper('.arrivals-slider', {
  spaceBetween:10,
  loop:true,
  centeredSlides:true,
  autoplay:{
    delay:9500,
    disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView:1,
    },
    768: {
      slidesPerView:2,
    },
    1024: {
      slidesPerView:3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween:10,
  loop:true,
  centeredSlides:true,
  autoplay:{
    delay:9500,
    disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView:1,
    },
    768: {
      slidesPerView:2,
    },
    1024: {
      slidesPerView:3,
    },
  },
});

var swiper = new Swiper(".blog-slider", {
  spaceBetween:10,
  loop:true,
  centeredSlides:true,
  autoplay:{
    delay:9500,
    disableOnInteraction:false,
  },
  breakpoints: {
    0: {
      slidesPerView:1,
    },
    768: {
      slidesPerView:2,
    },
    1024: {
      slidesPerView:3,
    },
  },
});


window.onscroll = () =>{
  searchform.classList.remove('active');
  if (window.scrollY > 0){
    document.querySelector('.header .header_two').classList.add('active');
  }else{
    document.querySelector('.header .header_two').classList.remove('active');
  }
}

window.onload = () => {
  if (window.scrollY > 80){
    document.querySelector('.header .header_two').classList.add('active');
  }else{
    document.querySelector('.header .header_two').classList.remove('active');
  }
}


document.addEventListener('DOMContentLoaded', function() {
 var addToCartButtons = document.querySelectorAll('.btn.addToCartBtn');
  addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
          event.preventDefault();
          var bookSlide = button.closest('.swiper-slide');
          var bookName = bookSlide.querySelector('.content h3').textContent;
          var bookImage = bookSlide.querySelector('.image img').src;
          var bookPrice = bookSlide.querySelector('.price').textContent;

          var priceRegex = /₹(\d+)/;
          var match = priceRegex.exec(bookPrice);
          var bookPriceValue = match ? parseInt(match[1]) : 0;

          var encodedBookName = encodeURIComponent(bookName);
          var encodedBookImage = encodeURIComponent(bookImage);
          var encodedBookPrice = encodeURIComponent(bookPriceValue);

          window.location.href = 'confirmation.html?title=' + encodedBookName + '&image=' + encodedBookImage + '&price=' + encodedBookPrice;
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const addToCartButtons = document.querySelectorAll(".addToCartBtn");

  addToCartButtons.forEach(button => {
      button.addEventListener("click", function() {
          const name = this.parentNode.querySelector("h3").textContent;
          const priceDiv = this.parentNode.querySelector(".price");
          const price = priceDiv.cloneNode(true);
          price.querySelector("span").remove();
          const priceText = price.textContent.trim();
          addToCart(name, priceText);
      });
  });

  function addToCart(name, price) {
      let cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
      cartItems.push({ name, price });
      sessionStorage.setItem("cartItems", JSON.stringify(cartItems));
  }
});