// Style Switcher
const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click",() => {
    document.querySelector(".style-switcher").classList.toggle("open");
});
// Hide Style Switcher on Scroll
window.addEventListener("scroll",() => {
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
});
// Theme Colors
const alternateStyles = document.querySelectorAll(".alternative-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    });
}
// Theme Light and dark mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click" , () =>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});

// Aside 
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
              removeBackSection();
              for(let j=0; j<totalNavList;j++)
              {
                  if(navList[j].querySelector("a").classList.contains("active"))
                  {
                      addBackSection(j);
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active");
              showSection(this);
              if(window.innerWidth < 1200)
              {
                  asideSectionTogglerBtn();
              }
          })
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
      function removeBackSection()
      {
          for(let i=0; i < totalSection;i++)
          {
              allSection[i].classList.remove("back-section");
          }
      }
      function showSection(element)
      {
          for(let i = 0; i<totalSection;i++)
          {
              allSection[i].classList.remove("active");
          }
          const target =  element.getAttribute("href").split("#")[1];
          document.querySelector("#"+target).classList.add("active")
      }
      function updateNav(element){
          for (let i = 0; i < totalNavList; i++) {
              navList[i].querySelector("a").classList.remove("active");         
              const target =  element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
              {
                  navList[i].querySelector("a").classList.add("active");
              }
          }
      }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
          const sectionIndex = this.getAttribute("data-section-index");
        //   console.log(sectionIndex);
          showSection(this);
          updateNav(this);
          removeBackSection();
          addBackSection(sectionIndex);
      })
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () =>{
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn(){
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i = 0;i<totalSection;i++)
                {
                    allSection[i].classList.toggle("open");
                }
            }
