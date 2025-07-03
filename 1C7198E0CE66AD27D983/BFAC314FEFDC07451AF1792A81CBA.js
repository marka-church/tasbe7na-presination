// deobfuscated with https://obf-io.deobfuscate.io/

'use strict';

// The presentation window should not be able to navigate the top-level window.
// This is a good security practice.
if (window.self !== window.top && !window.opener) {
    window.top.location.href = window.location.href;
}

if (window.isSecureContext) {
    // Prevent the right-click context menu
    document.addEventListener("contextmenu", e => {
        e.preventDefault();
    }, false);

    document.addEventListener("DOMContentLoaded", function () {
        const slideShowBody = document.getElementById("slideShow");
        let currentFontSize = null;

        function setupMessageListener() {
            // Listen for messages from the parent window that opened this one
            window.addEventListener("message", handleMessage);
        }

        function handleMessage(event) {
            // It's good practice to check the origin, but for GitHub pages to local dev,
            // this might be tricky. For now, we'll allow any.
            // if (event.origin !== 'http://your-main-app.com') return;

            if (event.data) {
                // The main logic from the original file is now inside this function.
                // It was previously named _0x53409b
                processMessageData(event.data);
            }
        }

        function processMessageData(data) {
            const message = JSON.stringify(data).replace(/"/g, '');
            slideShowBody.style.overflow = "auto";
            slideShowBody.style.cursor = "auto";
            slideShowBody.style.height = "unset !important";
            slideShowBody.children[0].classList.remove("blank");

            switch (message) {
                case "C7503AB487C392E8CBBE756FD7340BD8": // Blank screen
                    slideShowBody.style.background = "black";
                    slideShowBody.style.overflow = "hidden";
                    slideShowBody.children[0].classList.add("blank");
                    break;
                case "14029A1DDB21B1385070500F8CDACB19": // Black background
                    slideShowBody.style.background = "black";
                    slideShowBody.children[0].style.color = "white";
                    break;
                case "CC8D8CE7B9B4EC7F5ABD1A302F3B9B31": // White background
                    slideShowBody.style.background = "white";
                    slideShowBody.children[0].style.color = "black";
                    break;
                case "5f2abbd565f3096a322eb83ba54b8f03e": // Green chroma background
                    slideShowBody.style.background = "green";
                    slideShowBody.children[0].style.color = "white";
                    break;
                case "2C59BB4E321DC7DBF9E89877569D1A2": // Zoom In
                case "C21B2F5B5A2176B89ECCAC7A510FE0": // Zoom Out
                    const currentSize = window.getComputedStyle(slideShowBody.children[0], null).getPropertyValue("font-size");
                    const currentSizeFloat = parseFloat(currentSize);
                    currentFontSize = message === "2C59BB4E321DC7DBF9E89877569D1A2" ? currentSizeFloat + 10 : currentSizeFloat - 10;
                    slideShowBody.children[0].style.fontSize = currentFontSize + "px";
                    break;
                case "AFB5304ED88DD1616F5B3EB6383C": // Reset Zoom
                    slideShowBody.children[0].style.fontSize = "calc(8vw + 1vh + 2vmin)";
                    break;
                default:
                    // This handles receiving a new slide's HTML
                    if (message.startsWith("86ED7F4C1FC9746E61AEA716B0E89440")) {
                        let slideHtml = message.replace("86ED7F4C1FC9746E61AEA716B0E89440", '');
                        slideShowBody.innerHTML = slideHtml;
                        
                        // Re-apply font size if it was changed
                        if (currentFontSize !== null) {
                            slideShowBody.children[0].style.fontSize = currentFontSize + "px";
                        }
                        
                        // Handle scrolling for content larger than the screen
                        if (slideShowBody.scrollHeight > slideShowBody.clientHeight) {
                            let h1 = document.getElementsByTagName("h1")[0];
                            if (h1 && h1.style.height !== "100%") {
                                h1.style.height = "100%";
                                h1.style.cursor = "all-scroll";
                                h1.innerHTML = "<br>" + h1.innerHTML + "<br> <br>";
                            }
                        }
                        if (slideShowBody.children[0].style.height === "100%") {
                            slideShowBody.scrollTo(0, 0);
                        }
                    }
                    break;
            }
             // START OF ENHANCER MOD
            if(window.opener && typeof window.opener.forceRasbe7naStyleRefresh === 'function'){
                window.opener.forceRasbe7naStyleRefresh();
            }
            // END OF ENHANCER MOD
        }

        // Start listening for messages
        setupMessageListener();
    }, false);
}
