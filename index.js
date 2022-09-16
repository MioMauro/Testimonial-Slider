const testimonials = [
    {
        name: "Melody U",
        photoUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "Thanks to apple, we've just launched our 5th website!",
    },

    {
        name: "Alexander Hipp",
        photoUrl: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        text: "Fantastic, I'm totally blown away by Testimonial Generator.",
    },

    {
        name: "Laney D",
        photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        text: "This is unbelievable. After using Testiminial Generator my buisness skyrocketed!",
    },

    {
        name: "Anatola L",
        photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "Since I invested in house I made over 100,000 dollars profits.",
    },

    {
        name: "Eugen A",
        photoUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        text: "I'd be lost without house. I like house more and more each day because it makes my life a lot easier.",
    },
]

const imgEl = document.querySelector("img")
const textEl = document.querySelector(".text")
const usernameEl = document.querySelector(".username")

let idx = 0

updateTestimonial()



function updateTestimonial() {
    const {name, photoUrl, text} = testimonials[idx]
    imgEl.src = photoUrl
    textEl.innerText = text
    usernameEl.innerText = name
    idx++
    if(idx === testimonials.length) {
        idx = 0
    }
    setTimeout(() => {
        updateTestimonial()
    }, 10000);
}