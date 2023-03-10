/*================ MENU SHOW Y HIDDEN ================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')



/*================ MENU SHOW ================*/
/*Validate if constant exist*/

if(navToggle){
    navToggle.addEventListener('click' , ()=>{
        navMenu.classList.add('show-menu')

    })
}

/*================ MENU HIDDEN ================*/
/*Validate if constant exist*/

if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*================ REMOVE MENU MOBILE ================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach( link => link.addEventListener('click', linkAction))


/*================ ACCORDION SKILLS ================*/

const skillsContent = document.getElementById('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header');


function toggleSkills(){
    let itemClass = this.parentNode.ClassName

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
       this.parentNode.className ='skills__content skills__open '
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills );
})


/*================ QUILIFICATION TABS ================*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

 tabs.forEach(tab =>{
     tab.addEventListener('click', ()=>{
         const target = document.querySelector(tab.dataset.target)

         tabContents.forEach(tabContent =>{
             tabContent.classList.remove('qualification__active')
         })
         target.classList.add('qualification__active')

         tabs.forEach(tab =>{
             tab.classList.remove('qualification__active')
         })
         tab.classList.add('qualification__active')
     })
 })
    

/*================ SERVICES MODAL ================*/
const modalViews  = document.querySelectorAll('.services__modal'),
      modalBtns   = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')


let modal = (modalClick) => {
    modalViews[modalClick].classList.add('active-modal')
}      

modalBtns.forEach((modalBtn, i ) =>{
    modalBtn.addEventListener('click', ()=>{
        modal(i)
    })
})  

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*================ PORTFOLIO SWIPER ================*/
let swiper = new Swiper('.portfolio__container' , {
    cssMode: true,
    loop:true,
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
   
});

/*================ TESTIMONIAL ================*/


/*================ SCROLL SECTIONS ACTIVE LINK ================*/
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset
   

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;  
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}



/*================ CHANGE BACKGROUND HEADER ================*/
function scrollHeader(){
    
    const nav = document.getElementById('header')
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)



/*================ SHOW SCROLL TOP ================*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll')
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);


/*================ DARK - LIGHT THEME ================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//previously selected 
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon  =  localStorage.getItem('selected-icon')

const getcurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon  = () => themeButton.classList.coontains(iconTheme) ? 'uil-moon' :  'uil-sun'

// we validate if the user previously chose a topic

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'revome'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)

}

//Activate /deactivate the theme manually with the button 

themeButton.addEventListener('click' , ()=>{
    //Add or remove the dark theme / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*================ SCROLL ANIMATION ================*/

const scrolledElements = document.querySelectorAll('.js__scroll');
      elementInView = (el, dividend = 1) => {
         const elementTop = el.getBoundingClientRect().top;
          return(
               elementTop <= (window.innerHeight || document.documentElement.clientHeight)/dividend
          );
      }

      const elementOutofView = (el) => {
          const elementTop = el.getBoundingClientRect().top;
          return(
              elementTop > (window.innerHeight || document.documentElement.clientHeight)
          );
      }

      const displayScrollElement = (element) =>{
          element.classList.add('scrolled');
      }

      const hideScrollElement = (element) =>{
          element.classList.remove('scrolled');
      }

      const handleScrollAnimation = () =>{
          scrolledElements.forEach((el) =>{
              if(elementInView(el,1.25)){
                  displayScrollElement(el)
              }
              else if(elementOutofView(el))
              {
                  hideScrollElement(el)
              }
          })
      }

      window.addEventListener('scroll', ()=>{
          handleScrollAnimation();
      })



     const  nonScrolledElements = document.querySelectorAll('.js__nonScroll');

     
        const handleNonscroll = (element)=>{
                element.classList.add('nonScrolled');
        }

        