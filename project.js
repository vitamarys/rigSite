const faqs = document.querySelectorAll('.faq-list__item')

const prNews = new Swiper(".project-slider", {
    slideClass: "project-slide",
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });
  const region = new Swiper(".slider-region", {
    slideClass: "slide-region",
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".next-region",
      prevEl: ".prev-region",
    },
  });
  const flour = new Swiper(".plans-slider", {
    slideClass: "plans-slide",
   
    pagination: {
      el: '.pagination-list',
			clickable: true,
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 2}</span>`;
        },
    },
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,

    navigation: {
      nextEl: ".next-region",
      prevEl: ".prev-region",
    },
  });
  let popProject = new Swiper(".slider-pop-project", {
    slideClass: "slide",
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".next-pop-project",
      prevEl: ".prev-pop-project",
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        spaceBetween: 10,
      },
      600: {
        spaceBetween: 20,
        slidesPerView: "auto",
      },
      1024: {
        slidesPerView: 4,
        slidesPerView: "auto",
      },
    },
  });
