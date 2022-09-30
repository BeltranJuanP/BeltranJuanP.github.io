/**
 * This function animates the UI on form submit
 * @param {*} event 
 */
function contact(event) {
    event.preventDefault();
    /**
     * await emailjs
     *  .sendForm(
     *      "service_zvd8v8s",
     *      "template_tt36sj8",
     *      event.target,
     *      "Fo5ZBuxcghS-WwStg",
     *  )
     * 
     */
    const loading = document.querySelector(".modal_overlay_loading")
    const success = document.querySelector(".modal_overlay_success")
    loading.classList += " modal_overlay_visible"

    setTimeout(() => {
        loading.classList.remove("modal_overlay_visible")
        success.classList += " modal_overlay_visible"
        setTimeout(() => {
            success.classList.remove("modal_overlay_visible");
        }, 2000);
    }, 1000);
}

/**
 * This function just acts like a link to send email to me.
 */
function sendEmail() {
    window.location.href = "mailto:juanbeltran2994@gmail.com";
}

/**
 * This function toggles the modal on and off
 */
function toggleModal() {
    if (!document.body.classList.contains("modal_open")) {
        document.body.classList += " modal_open"
        document.body.classList += " stop_scrolling"
    } else {
        document.body.classList.remove("modal_open")
        document.body.classList.remove("stop_scrolling")
    }
}

/**
 * This function toggles dark mode on and off
 */
function toggleContrast() {
    if (!document.body.classList.contains("dark_theme")) {
        document.body.classList += " dark_theme"
    } else {
        document.body.classList.remove("dark_theme")
    }
}