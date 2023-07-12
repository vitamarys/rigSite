document.addEventListener("DOMContentLoaded", () => {
  const slidersContols = document.querySelectorAll(".contols");
  let region = '';
  let beach = '';
  let palm = '';
  let propNekhel ='';
  let similar = '';
  let poplisting ='';
  const sliderFlags = {
    apartments: false,
    vilas: false,
    offset: false,
    region: false,
    beach: false,
    palm: false,
    pop_project: false,
    pop_area:false
  };
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
  const aboutTeam = new Swiper(".team-slider", {
    slideClass: "team-slide",
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".next-photo",
      prevEl: ".prev-photo",
    },
  });
  const devHero = new Swiper(".developer-slider", {
    slideClass: "one-slide",
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });
  const listing = new Swiper(".listing-slider", {
    slideClass: "listing-slide",
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });
  const flour = new Swiper(".plans-slider", {
    slideClass: "plans-slide",

    pagination: {
      el: ".pagination-list",
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

  const news = new Swiper(".slider-news", {
    slideClass: "slide",
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 40,
    navigation: {
      nextEl: ".next-news",
      prevEl: ".prev-news",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
    
  });
  const awards = new Swiper(".award-slider", {
    slideClass: "award-slide",
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".next-award",
      prevEl: ".prev-award",
    },
    breakpoints: {
      320: {
        slidesPerView: "auto",
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
      600: {
        slidesPerView: "auto",
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
      1024: {
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    },
    
  });
  if (window.innerWidth >= 700) {
    const sold =  new Swiper(".slider-sold", {
      slideClass: "slide-similar",
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 40,
      navigation: {
        nextEl: ".next-poplisting",
        prevEl: ".prev-poplisting",
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
    region =  new Swiper(".slider-region", {
        slideClass: "slide-region",
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40,
        navigation: {
          nextEl: ".next-region-pr",
          prevEl: ".prev-region-pr",
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
      beach =  new Swiper(".slider-beach", {
        slideClass: "slide-beach",
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40,
        navigation: {
          nextEl: ".next-beach",
          prevEl: ".prev-beach  ",
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
      palm =  new Swiper(".slider-palm", {
        slideClass: "slide-palm",
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40,
        navigation: {
          nextEl: ".next-palm",
          prevEl: ".prev-palm",
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
      propNekhel =  new Swiper(".slider-nekhel-big", {
        slideClass: "slide-nekhel-big",
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40,
        navigation: {
          nextEl: ".next-palm",
          prevEl: ".prev-palm",
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
      similar =  new Swiper(".slider-similar", {
        slideClass: "slide-similar",
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40,
        navigation: {
          nextEl: ".next-similar",
          prevEl: ".prev-similar",
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
      poplisting =  new Swiper(".slider-poplisting", {
        slideClass: "slide-similar",
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40,
        navigation: {
          nextEl: ".next-poplisting",
          prevEl: ".prev-poplisting",
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
  }
  let pop_area = new Swiper(".slider-pop-area", {
    slideClass: "slide",
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".next-pop-area",
      prevEl: ".prev-pop-area",
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

  let pop_project = new Swiper(".slider-pop_project", {
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
  let apartments = new Swiper(".slider-apartments", {
    slideClass: "slide",
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".next-apartments",
      prevEl: ".prev-apartments",
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
  let vilas = new Swiper(".slider-villas", {
    slideClass: "slide",
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".next-vilas",
      prevEl: ".prev-vilas",
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
  let offset = new Swiper(".slider-offset", {
    slideClass: "slide",
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".next-offset",
      prevEl: ".prev-offset",
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
  let agent = new Swiper(".slider-agent", {
    slideClass: "slide",
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".next-agent",
      prevEl: ".prev-agent",
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
  let devProjects = new Swiper(".slider-dev-projects", {
    slideClass: "slide",
    slidesPerView: 4,
    slidesPerGroup: 1,
    spaceBetween: 40,
    navigation: {
      nextEl: ".next-dev-projects",
      prevEl: ".prev-dev-projects",
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
  slidersContols.forEach((el, index) => {
    const colapseBtn = el.querySelector(".colapse");
    if(colapseBtn){
      colapseBtn.addEventListener("click", () => {
   
        sliderFlags[`${colapseBtn.dataset.slidername}`] =
          !sliderFlags[`${colapseBtn.dataset.slidername}`];
        if (sliderFlags[`${colapseBtn.dataset.slidername}`]) {
          
          eval(colapseBtn.dataset.slidername).destroy();
          colapseBtn.classList.add("tile");
          wrapper[index].classList.add("tile-wiew");
        } else {
          let sl = `${colapseBtn.dataset.slidername}`;
          colapseBtn.classList.remove("tile");
          wrapper[index].classList.remove("tile-wiew");
  
          switch (sl) {
            case "apartments":
              apartments = new Swiper(".slider-apartments", {
                slideClass: "slide",
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 40,
                navigation: {
                  nextEl: ".next-apartments",
                  prevEl: ".prev-apartments",
                },
                breakpoints: {
                  320: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                    slidesPerView: "auto",
                  },
                },
              });
              break;
            case "vilas":
              vilas = new Swiper(".slider-villas", {
                slideClass: "slide",
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 40,
                navigation: {
                  nextEl: ".next-vilas",
                  prevEl: ".prev-vilas",
                },
                breakpoints: {
                  320: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                    slidesPerView: "auto",
                  },
                },
              });
              break;
            case "offset":
              vilas = new Swiper(".slider-offset", {
                slideClass: "slide",
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 40,
                navigation: {
                  nextEl: ".next-offset",
                  prevEl: ".prev-offset",
                },
                breakpoints: {
                  320: {
                    slidesPerView: 1,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 4,
                    slidesPerView: "auto",
                  },
                },
              });
              break;
            case "region":
              region = new Swiper(".slider-region", {
                slideClass: "slide-region",
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 40,
                navigation: {
                  nextEl: ".next-region",
                  prevEl: ".prev-region",
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
              break;
              case "beach":
                beach =  new Swiper(".slider-beach", {
                  slideClass: "slide-beach",
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                  spaceBetween: 40,
                  navigation: {
                    nextEl: ".next-beach",
                    prevEl: ".prev-beach  ",
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
                break;
                case "palm":
                  palm = new Swiper(".slider-palm", {
                    slideClass: "slide-palm",
                    slidesPerView: 3,
                    slidesPerGroup: 1,
                    spaceBetween: 40,
                    navigation: {
                      nextEl: ".next-palm",
                      prevEl: ".prev-palm",
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
                  break;
                  case 'propNekhel':
                    propNekhel =  new Swiper(".slider-nekhel-big", {
                      slideClass: "slide-nekhel-big",
                      slidesPerView: 3,
                      slidesPerGroup: 1,
                      spaceBetween: 40,
                      navigation: {
                        nextEl: ".next-palm",
                        prevEl: ".prev-palm",
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
            case "pop_project":
              pop_project = new Swiper(".slider-pop_project", {
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
              break;
              case "similar":
              similar =  new Swiper(".slider-similar", {
                slideClass: "slide-similar",
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 40,
                navigation: {
                  nextEl: ".next-similar",
                  prevEl: ".prev-similar",
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
                    slidesPerView: "auto",
                    slidesPerView: "auto",
                  },
                },
              });
              break;
              case "poplisting":
                poplisting =  new Swiper(".slider-poplisting", {
                  slideClass: "slide-similar",
                  slidesPerView: 3,
                  slidesPerGroup: 1,
                  spaceBetween: 40,
                  navigation: {
                    nextEl: ".next-poplisting",
                    prevEl: ".prev-poplisting",
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
                      slidesPerView: "auto",
                      slidesPerView: "auto",
                    },
                  },
                });
                break;
              case'devProjects':
              devProjects = new Swiper(".slider-dev-projects", {
                slideClass: "slide",
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 40,
                navigation: {
                  nextEl: ".next-dev-projects",
                  prevEl: ".prev-dev-projects",
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
              break;
              case 'pop_area':
                pop_area = new Swiper(".slider-pop-area", {
                  slideClass: "slide",
                  slidesPerView: 4,
                  slidesPerGroup: 1,
                  spaceBetween: 40,
                  navigation: {
                    nextEl: ".next-pop-area",
                    prevEl: ".prev-pop-area",
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
                break;
            default:
              console.log("No slider to reinit");
          }
        }
      });
    }
    
  });
});
