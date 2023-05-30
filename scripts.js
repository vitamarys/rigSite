document.addEventListener("DOMContentLoaded", () => {

   const container = document.querySelector(".container");
  gradient = document.querySelectorAll(".gradient");
  (wrapper = document.querySelectorAll(".slides-wrap")),
    (langSelect = document.querySelectorAll(".lang-select")),
    (langSelectLine = document.querySelectorAll(".lang-select__line"));
  (langForm = document.querySelectorAll(".lang")),
    (languageVal = document.querySelectorAll(".language")),
    (currencyVal = document.querySelectorAll(".currency")),
    // (selectValues = document.querySelectorAll(".custom-select__select")),
    (filterSelects = document.querySelectorAll(".filter-select")),
    (filterOptions = document.querySelectorAll(".filter-opions")),
    (projectVal = document.querySelector("[data-prj_sel]")),
    (devVal = document.querySelector("[data-dev_sel]")),
    (btnLang = document.querySelectorAll(".btn-lang")),
    (burgerBtn = document.querySelector(".burger")),
    (headerTop = document.querySelector(".header__top")),
    (main = document.querySelector("main")),
    (footer = document.querySelector("footer")),
     faqs = document.querySelectorAll('.faq-list__item'),
     stickyBlock = document.querySelector('.scroll-block'),
     stickyWrapper = document.querySelector('.scroll'),
     smallCards = document.querySelectorAll('.small-card'),
     bodyPid = document.querySelector('body').dataset.pid,
     storeProject = localStorage.getItem('project_rating') 
     projectsRating = document.querySelectorAll('.project-rating'),
     shareBtns = document.querySelectorAll('.share-btn'),
     socialMenus = document.querySelectorAll('.social-menu'),
     infoBlock = document.querySelector('.media-links'),
     dropdownItem = document.querySelector('.drop'),
     dropdownList = document.querySelector('.dropdown'),
    (headerBot = document.querySelector(".header__bot"));
  
  window.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.closest(".lang-select")) {
      langForm[0].classList.remove("active");
      langSelect[0].classList.remove("active");
      langSelects.forEach((el) => {
        el.classList.remove("open");
      });
    }
    if (!target.closest(".filter-body")) {
      filterSelects.forEach((el) => {
        el.classList.remove("active");
      });
      filterOptions.forEach((el) => {
        el.classList.remove("active");
      });
    }
  });
  langSelectLine.forEach((el, index) => {
    el.addEventListener("click", (e) => {
      console.log("test");
      const target = e.target;
      if (
        langSelect[index].className === "lang-select active" ||
        langSelect[index].className === "lang-select mob-lang active"
      ) {
        langSelect[index].classList.remove("active");
        langForm[index].classList.remove("active");
      } else {
        langSelect[index].classList.add("active");
        langForm[index].classList.add("active");
      }
    });
  });
  langForm.forEach((el, index) => {
    langSelects = el.querySelectorAll(".custom-select");
    langSelects.forEach((select) => {
      const selectLine = select.querySelector(".custom-select__select");
      selectLine.addEventListener("click", (e) => {
        const langOptions = select.querySelectorAll(
          ".custom-select__options__list__item"
        );
        const selectTitle = select.querySelector(".custom-select__select");
        select.classList.add("open");

        langOptions.forEach((opt) => {
          opt.addEventListener("click", (e) => {
            console.log("12345");
            select.classList.remove("open");
            btnLang[index].disabled = false;

            langOptions.forEach((el) => {
              el.classList.remove("selected");
            });
            opt.classList.add("selected");
            selectTitle.textContent = opt.textContent;
            if (opt.dataset.lang_value) {
              selectTitle.dataset.lang = opt.dataset.lang_value;
            } else {
              selectTitle.dataset.currency = opt.dataset.currency_value;
            }
          });
        });
      });
    });
  });
  burgerBtn.addEventListener("click", () => {
    headerTop.classList.toggle("blue");
    headerBot.classList.toggle("active");
    burgerBtn.classList.toggle("active");
    main.classList.toggle("no-scroll");
    footer.classList.toggle("no-scroll");
  });

  btnLang.forEach((el, index) => {
    el.addEventListener("click", () => {
      console.log(index);
      selectValues = langForm[index].querySelectorAll(".custom-select__select");
      console.log(selectValues);
      selectValues.forEach((select) => {
        if (select.dataset.lang) {
          languageVal[index].dataset.lang = select.dataset.lang;
          languageVal[index].textContent = select.dataset.lang.toUpperCase();
        } else {
          currencyVal[index].dataset.currency = select.dataset.currency;
          currencyVal[index].textContent =
            select.dataset.currency.toUpperCase();
        }
      });
      langSelect[index].classList.remove("active");
      langForm[index].classList.remove("active");
    });
  });

  filterSelects.forEach((select, index) => {
    select.addEventListener("click", () => {
      if (select.className !== "filter-select active") {
        filterSelects.forEach((el) => {
          el.classList.remove("active");
        });
        filterOptions.forEach((el) => {
          el.classList.remove("active");
        });
        select.classList.add("active");
        filterOptions[index].classList.add("active");
      } else {
        select.classList.remove("active");
        filterOptions[index].classList.remove("active");
      }
    });
  });
  filterOptions.forEach((el) => {
    const options = el.querySelectorAll(".filter-opions__list__item");
    options.forEach((option) => {
      option.addEventListener("click", () => {
        if (option.dataset.prjval) {
          // projectVal.dataset.prj_sel = option.dataset.prjval
          // projectVal.textContent = option.textContent
          filterSelects.forEach((el) => {
            el.classList.remove("active");
          });
          filterOptions.forEach((el) => {
            el.classList.remove("active");
          });
        } else {
          // devVal.dataset.dev_sel = option.dataset.dev_val
          // devVal.textContent = option.textContent
          filterSelects.forEach((el) => {
            el.classList.remove("active");
          });
          filterOptions.forEach((el) => {
            el.classList.remove("active");
          });
        }
      });
    });
  });
  if (window.innerWidth >= 1025 && window.innerWidth <= 1366) {
    gradient.forEach((el) => {
      const widthGrad = container.clientWidth / 2;

      el.style.width = `calc(50% - ${widthGrad - 20}px)`;
    });
    window.addEventListener("resize", () => {
      gradient.forEach((el) => {
        const widthGrad = container.clientWidth / 2;
        el.style.width = `calc(50% - ${widthGrad - 20}px)`;
      });
    });
  }

  // if(stickyBlock){
  //   window.addEventListener('scroll',()=>{
  //     if(stickyWrapper.getBoundingClientRect().y < 0 && stickyWrapper.getBoundingClientRect().y > -stickyWrapper.offsetHeight + stickyBlock.clientHeight ){
       
  //       stickyBlock.style = `top: ${Math.abs(stickyWrapper.getBoundingClientRect().y) + 50}px`
  //     }
    
  //   })
  // }
 
  faqs.forEach(faq=>{
       
    faq.addEventListener('click',()=>{
     
       faq.classList.toggle('active');
    })
  })
  smallCards.forEach(card =>{
    const cardTextSection = card.querySelector('.small-card__text-section')
    const cardTitle = card.querySelector('.small-card__title');
    if(cardTextSection && cardTextSection.clientWidth < cardTitle.scrollWidth){
      card.classList.add('run-text')
   
    }
    
  })
  if (storeProject){
    
    const projectsArr = JSON.parse(storeProject)
    projectsArr.forEach(elArr=>{
      if (elArr.id !== bodyPid  && bodyPid) {
        console.log('asd');
        projectsRating.forEach(el =>{
          const stars = el.querySelectorAll('.star');
          const rating = el.querySelector('.rating')
       
          stars.forEach((el , indx)=>{
            el.addEventListener('click',()=>{
              console.log(elArr.id);
              stars.forEach((star , i)=>{
                
                rating.textContent = `${indx + 1 }/5`
                star.classList.add('def');
           
                

                if(i <= indx){
                  star.classList.remove('def')
                  star.classList.add('check')
                }
              })
              projectsArr.push({id:bodyPid, rating: indx + 1 });
              localStorage.setItem('project_rating', JSON.stringify(projectsArr))

              console.log(projectsArr);
            })
          
          })
        })
      }else{
       
        projectsRating.forEach(el =>{
          const stars = el.querySelectorAll('.star');
          const rating = el.querySelector('.rating')
       
          stars.forEach((el , indx)=>{
              stars.forEach((star , i)=>{
                rating.textContent = `${elArr.rating}/5`
                star.classList.add('def');

      
                if(i <= elArr.rating - 1){
                  star.classList.remove('def')
                  star.classList.add('check')
                }
              })
            
          
          })
        })
      }
     
    })

    

   

  }else{
   
    projectsRating.forEach(el =>{
      const stars = el.querySelectorAll('.star');
      const rating = el.querySelector('.rating')
     
      stars.forEach((el , indx)=>{
        el.addEventListener('click',(e)=>{
          stars.forEach((star , i)=>{
            
            rating.textContent = `${indx + 1 }/5`
            star.classList.add('def');
          
  
            localStorage.setItem('project_rating', JSON.stringify([{id:bodyPid, rating: indx + 1 }]))
            if(i <= indx){
              star.classList.remove('def')
              star.classList.add('check')
            }
          })
        })
      
      })
    })
  }
  if(shareBtns){
    shareBtns.forEach(shareBtn=>{
      shareBtn.addEventListener('click',()=>{
        socialMenus.forEach(socialMenu=>{
          socialMenu.classList.toggle('show');
        })
       
        shareBtn.classList.toggle('active')
      });
    })
    if(infoBlock){
      infoBlock.addEventListener('mouseleave',()=>{
        socialMenus.forEach(socialMenu=>{
          socialMenu.classList.remove('show');
        })
        shareBtns.forEach(shareBtn=>{
          shareBtn.classList.remove('active')
        })
        
      });
    }
   
  }
 dropdownItem.addEventListener('click',()=>{
  dropdownItem.classList.toggle('open')
  dropdownList.classList.toggle('show')
 })
 dropdownItem.addEventListener('mouseleave',(e)=>{
  const target = e.target;
  if (target !== dropdownItem || target !== dropdownList){
    dropdownItem.classList.remove('open')
  dropdownList.classList.remove('show')
  }
 })
});
