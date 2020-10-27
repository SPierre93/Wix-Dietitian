function main()
{
    //Fetch buttons
    const menuButton = document.querySelector("#hamburger-menu");
    const closeMenuButton = document.querySelector("#close-menu-button")
    const modalTransparentLayer = document.querySelector("#menu-modal");
    const menuModal = document.querySelector("#modal-content");
    const bodyOpenModal = document.querySelector("body");


    //Hamburger menu "button"
    menuButton.addEventListener("click",(event)=>{
        
        //General button settings
        menuButton.style.display="none";
        modalTransparentLayer.style.display="block";
        menuModal.style.display="grid";
        closeMenuButton.style.display="block";
        bodyOpenModal.style.overflow="hidden";
        menuModal.style.overflow="hidden";

        //Animation
        menuModal.classList.remove("animate__animated", "animate__slideOutRight");
        menuModal.classList.add("animate__animated", "animate__slideInRight");
    })


    //Menu close "button"
    closeMenuButton.addEventListener("click",(event)=>{

        menuButton.style.display="block";
        modalTransparentLayer.style.display="none";
        closeMenuButton.style.display="none";
        bodyOpenModal.style.overflow="auto";

        menuModal.classList.remove("animate__animated", "animate__slideInRight");
        menuModal.classList.add("animate__animated", "animate__slideOutRight");


        //Allows for resizing without compromising event listener rules
        window.addEventListener("resize", function() {
            if (window.matchMedia("(min-width: 992px)").matches) 
            {
                menuModal.style.display="grid";
                menuButton.style.display="none";  
                menuModal.classList.remove("animate__animated", "animate__slideOutRight");
                menuModal.classList.remove("animate__animated", "animate__slideInRight");
            }

            else
            {
                menuButton.style.display="block";
                modalTransparentLayer.style.display="none";
                closeMenuButton.style.display="none";
                bodyOpenModal.style.overflow="auto";
                menuModal.style.display="none";
            }
        })
    })
}
main();