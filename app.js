
// SUBMIT HOMEPAGE
const inputUsername = document.querySelector("#inputUsername");
const inputPassword = document.querySelector("#inputPassword");
const incorrectUsername = document.querySelector(".wrong-username");
const incorrectPassword = document.querySelector(".wrong-password");
const submitForm = document.querySelector("#submit");
const username = "jennifermark";
const password = "jen&mark25";


if (submitForm) {
    submitForm.addEventListener("click", (e)=>{
        if(inputUsername.value != username) {
            console.log("wrong password");
            
            inputUsername.classList.add("red-border");
    
            setTimeout(() => {
                inputUsername.classList.remove("red-border");
            }, 2000);
    
            incorrectUsername.classList.add("display-wrong-info");
    
            setTimeout(() => {
                incorrectUsername.classList.remove("display-wrong-info");
            }, 2000);
         
            e.preventDefault();
        }
    
        if(inputPassword.value != password) {
            console.log("wrong username");
    
            inputPassword.classList.add("red-border");
    
            setTimeout(() => {
                inputPassword.classList.remove("red-border");
            }, 2000);
    
            incorrectPassword.classList.add("display-wrong-info");
    
    
            setTimeout(() => {
                incorrectPassword.classList.remove("display-wrong-info");
            }, 2000);
         
            e.preventDefault();
        }
    });
    
}


// SEND A MESSAGE FORM FUNCTION
const contactForm = document.querySelector(".contact-body");
const submitContactBtn = document.querySelector(".contact-button");
const removeMessage = document.querySelector(".remove-message");
const showMessageForm = document.querySelector(".fa-message");
const input = document.querySelectorAll("#input");


if(showMessageForm) {
    showMessageForm.addEventListener("click", () => {

        contactForm.classList.add("message-appear");

        darkenDashboard.classList.add("toggle-darken-dashboard");

    })
}

if (removeMessage) {
    removeMessage.addEventListener("click", () => {

        contactForm.classList.remove("message-appear");

        darkenDashboard.classList.remove("toggle-darken-dashboard");


    });
}

if (submitContactBtn) {
    submitContactBtn.addEventListener("click", () => {

        contactForm.classList.remove("message-appear");

        darkenDashboard.classList.remove("toggle-darken-dashboard");

        for (let i = 0; i < input; i++) {
            input[i].value = "";
            
        }
    });

}

// BELL FUNCTIONALITY
const bellNotification = document.querySelector(".notify");

const bell = document.querySelector(".fa-bell");

const removeChoice = document.querySelector(".remove-choice");

const userChoice = document.querySelectorAll(".choice");


if (bell) {

    bell.addEventListener("click", () => {

        console.log("Hello!")

        bellNotification.classList.add("display-bell-notification");

        darkenDashboard.classList.add("toggle-darken-dashboard");

    });
}

if (removeChoice) {

    removeChoice.addEventListener("click", () => {

        console.log("Hello!")

        bellNotification.classList.remove("display-bell-notification");

        darkenDashboard.classList.remove("toggle-darken-dashboard");

    });
}

if (userChoice) {

    for (let i = 0; i < userChoice.length; i++) {

        userChoice[i].addEventListener("click", () => {

            console.log("Hello!")
    
            bellNotification.classList.remove("display-bell-notification");
    
            darkenDashboard.classList.remove("toggle-darken-dashboard");
    
        });
        
    }

}








// BUTTON ACTIONS ON DASHBOARD
const withdraw = document.querySelector(".withdraw-btc");

const buy = document.querySelector(".buy-btc");

const trade = document.querySelector(".trade-btc");

const inaccessibleWithdrawal = document.querySelector(".withdrawal");

const inaccessiblebuying = document.querySelector(".purchase");

const inaccessibleTrade = document.querySelector(".trade");

const subscribe = document.querySelector(".subscribe-notification");

const subscribeMenu = document.querySelector(".subscribe-menu");





withdraw.addEventListener("click", ()=> {
    console.log("hello");

    inaccessibleWithdrawal.classList.add("show-notification");

    setTimeout(() => {

    inaccessibleWithdrawal.classList.remove("show-notification");
        
    }, 4000);
});

buy.addEventListener("click", ()=> {

    console.log("hello");

    inaccessiblebuying.classList.add("show-notification")

    setTimeout(() => {

        inaccessiblebuying.classList.remove("show-notification");
            
        }, 4000);
});

trade.addEventListener("click", ()=> {

    console.log("hello");

    inaccessibleTrade.classList.add("show-notification")

    setTimeout(() => {

        inaccessibleTrade.classList.remove("show-notification");
            
        }, 4000);
});

subscribeMenu.addEventListener("click", ()=> {

    console.log("hello");

    setTimeout(() => {
         subscribe.classList.add("show-notification");
        
    }, 1000);

    setTimeout(() => {

        subscribe.classList.remove("show-notification");
            
        }, 4000);
});




// HAMBURGER FUNCTION 
const dashboard = document.querySelector(".dashboard");
const darkenDashboard = document.querySelector(".darken-dashboard");
const hamburger = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");
// const showMenu = document.querySelector(".show-menu");
const closeMenu = document.querySelector(".fa-x");
const homeMenu = document.querySelectorAll(".other-menu"); 

if (hamburger) {

    hamburger.addEventListener("click", () => {

        console.log("hmaburger got clicked!");

        menu.classList.toggle("show-menu");

        darkenDashboard.classList.toggle("toggle-darken-dashboard");
    });
    
   
}

if (closeMenu) {

    closeMenu.addEventListener("click", () => {

        menu.classList.remove("show-menu");

        darkenDashboard.classList.toggle("toggle-darken-dashboard");
    });
    
}

if (homeMenu) {

  for (let i = 0; i < homeMenu.length; i++) {

    homeMenu[i].addEventListener("click", () => {

        menu.classList.remove("show-menu");

        darkenDashboard.classList.toggle("toggle-darken-dashboard");
    })
    
  }
    
}



// if (window = menu) {
//     window.addEventListener("click", () => {
//         menu.classList.remove("show-menu");
//     })
// }


