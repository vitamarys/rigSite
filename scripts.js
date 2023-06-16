document.addEventListener("DOMContentLoaded", () => {

   const container = document.querySelector(".container");
  gradient = document.querySelectorAll(".gradient");
  (wrapper = document.querySelectorAll(".slides-wrap")),
    (langSelect = document.querySelector(".lang-select")),
    (langSelectLine = document.querySelector(".lang-select__line"));
  (langForm = document.querySelector(".lang")),
    (languageVal = document.querySelector(".language")),
    (currencyVal = document.querySelector(".currency")),
    (filterSelects = document.querySelectorAll(".filter-select")),
    (filterOptions = document.querySelectorAll(".filter-opions")),
    (projectVal = document.querySelector("[data-prj_sel]")),
    (devVal = document.querySelector("[data-dev_sel]")),
    (btnLang = document.querySelector(".btn-lang")),
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
     devCards = document.querySelectorAll('.developers-list__item'),
     logo = document.querySelector('.logo-head'),
     closeSelectBtn = document.querySelector('.mob-close'),
    headerBot = document.querySelector(".header__bot");
  
  window.addEventListener("click", (e) => {
    const target = e.target;
    if (!target.closest(".lang-select") && target == burgerBtn && burgerBtn.classList.value === 'burger active' ) {
      langForm.classList.remove("active");
      langSelect.classList.remove("active");
      langSelect.classList.remove("open");

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

  closeSelectBtn.addEventListener('click',()=>{
    logo.classList.remove('show');
    burgerBtn.classList.remove("active");
    langForm.classList.remove("active");
    main.classList.toggle("no-scroll");
    footer.classList.toggle("no-scroll");

  })

    langSelectLine.addEventListener("click", (e) => {
      if(window.innerWidth < 1366){

        main.classList.toggle("no-scroll");
        footer.classList.toggle("no-scroll");
      }
      logo.classList.add('show');
      burgerBtn.classList.add("active");

      if (
        langSelect.className === "lang-select active"
        
      ) {
        langSelect.classList.remove("active");
        langForm.classList.remove("active");
      } else {
        langSelect.classList.add("active");
        langForm.classList.add("active");
      }
    });



    langSelects = langForm.querySelectorAll(".custom-select");
    langSelects.forEach((select) => {
      const selectLine = select.querySelector(".custom-select__select");
      const selectTitle = select.querySelector(".custom-select__select");

      const langOptions = select.querySelectorAll(
        ".custom-select__options__list__item"
      );
      selectLine.addEventListener("click", (e) => {
     
        select.classList.toggle("open");

        
      });
      langOptions.forEach((opt) => {
    
        opt.addEventListener("click", (e) => {
          
          select.classList.remove("open");
          btnLang.disabled = false;

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
  
  burgerBtn.addEventListener("click", () => {

    if(langForm.classList.value === 'pop-up lang active'){
      langSelect.classList.toggle("active");
      logo.classList.remove('show');
      langForm.classList.toggle("active");
    }else{
      langSelect.classList.toggle("active");
      headerTop.classList.toggle("blue");
      headerBot.classList.toggle("active");
    }
    logo.classList.toggle('show');
    burgerBtn.classList.toggle("active");
    main.classList.toggle("no-scroll");
    footer.classList.toggle("no-scroll");
  });


    btnLang.addEventListener("click", () => {
      selectValues = langForm.querySelectorAll(".custom-select__select");
      selectValues.forEach((select) => {
        if (select.dataset.lang) {
          
          languageVal.dataset.lang = select.dataset.lang;
          languageVal.textContent = select.dataset.lang.toUpperCase();
        } else {
          currencyVal.dataset.currency = select.dataset.currency;
          currencyVal.textContent =
            select.dataset.currency.toUpperCase();
        }
      });
      logo.classList.remove('show');
      burgerBtn.classList.remove("active");
      langForm.classList.remove("active");
      langSelect.classList.remove("active");
      langForm.classList.remove("active");
      main.classList.remove("no-scroll");
      footer.classList.remove("no-scroll");
    });


  filterSelects.forEach((select, index) => {
    select.addEventListener("click", () => {
      dropdownItem.classList.remove('open');
      dropdownList.classList.remove('show')
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
    const voted =  projectsArr.filter(elArr => elArr.id === bodyPid );

    projectsArr.forEach(elArr=>{
      if (elArr.id !== bodyPid && voted.length === 0 ) {
        projectsRating.forEach(el =>{
          const stars = el.querySelectorAll('.star');
          const rating = el.querySelector('.rating')
       
          stars.forEach((el , indx)=>{
            el.addEventListener('click',()=>{
             console.log('asdasdasdsad');
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

              
            })
          
          })
        })
      }else{
      
        projectsRating.forEach(el =>{
          const stars = el.querySelectorAll('.star');
          const rating = el.querySelector('.rating')
         
          stars.forEach((el , indx)=>{
              stars.forEach((star , i)=>{
                if(elArr.id === bodyPid){
                  rating.textContent = `${elArr.rating}/5`
                  star.classList.add('def');
  
        
                  if(i <= elArr.rating - 1){
                    star.classList.remove('def')
                    star.classList.add('check')
                  }
                }
               
              })
            
          
          })
        })
      }
     
    })

    

   

  }else if (bodyPid){
   
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
  if(devCards){
    devCards.forEach(devCard=>{
      devCard.addEventListener('mouseover',()=>{
        devCard.classList.add('show-link')
      })
      devCard.addEventListener('mouseleave',()=>{
        devCard.classList.remove('show-link')
      })
    })
  }
 dropdownItem.addEventListener('click',()=>{
  dropdownItem.classList.toggle('open')
  dropdownList.classList.toggle('show')
 })
 if( window.innerWidth > 1366){
 
  dropdownItem.addEventListener('mouseleave',(e)=>{
    const target = e.target;
    if (target !== dropdownItem || target !== dropdownList){
  
      dropdownItem.classList.remove('open')
    dropdownList.classList.remove('show')
    }
   })
 }

});
