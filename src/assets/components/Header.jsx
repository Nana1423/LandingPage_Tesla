import "./Header.css"
import { useEffect } from "react"

let menuBackdrop = {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(12px)',
    borderRadius: '0.375rem',
    transform: 'translateX(var(--left)) translateY(var(--top))',
    top: -5,
    left: -13,
    width: 'var(--width)',
    height: 'var(--height)',
    transition: 'all 0.2s ease-in-out',
    padding: 5,
    paddingLeft: 20,
    opacity: 0,
    zIndex: -10,
}


export default function Header() {

    useEffect(() => {
        const header = document.querySelector('#landing-header')

        const observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 0.9
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const { isIntersecting } = entry
                if (isIntersecting) {
                    const color = entry.target.getAttribute("data-header-color")
                    header.style.color = color
                }
            })
        }, observerOptions)

        const sections = document.querySelectorAll(".lading-section")
        sections.forEach((section) => observer.observe(section))
    })

    useEffect(() => {
        const listItem = document.querySelectorAll("#landing-header li")
        const menuBackDrop = document.querySelector("#menu-backdrop")

        listItem.forEach((item) => {
            item.addEventListener("mouseenter", () => {
                const { left, top, width, height } = item.getBoundingClientRect()

                menuBackDrop.style.setProperty("--left", `${left}px`)
                menuBackDrop.style.setProperty("--top", `${top}px`)
                menuBackDrop.style.setProperty("--width", `${width}px`)
                menuBackDrop.style.setProperty("--height", `${height}px`)

                menuBackDrop.style.opacity = "1"
                menuBackDrop.style.visibility = "visible"
            })

            item.addEventListener("mouseleave", () => {
                menuBackDrop.style.opacity = "0"
                menuBackDrop.style.visibility = "hidden"
            })
        })
    })

    const openMenu = () => {
        const nav = document.querySelector("#main-nav")
        nav.classList.toggle("responsive_nav")
    }

    return (
        <header id="landing-header" >
            <div className="div-logo">
                <a href="#home">
                    <svg
                        viewBox="0 0 342 35"
                        xmlns="http://www.w3.org/2000/svg"
                    ><path
                        d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
                        fill="currentColor"></path></svg
                    >
                </a>
            </div>
            <nav className="nav-first">
                <ul id="main-nav" className="main-ul">
                    <li><a href="#modelS">Model S</a></li>
                    <li><a href="#model3">Model 3</a></li>
                    <li><a href="#modelX">Model X</a></li>
                    <li><a href="#modelY">Model Y</a></li>
                    <li><a href="#powerwall">Powerwall</a></li>
                    <li><a href="#accessories">Accessories</a></li>
                </ul>
            </nav>
            <nav className="nav-second">
                <ul className="secondary-ul">
                    <li><a href="">Soporte</a></li>
                    <li><a href="">Tienda</a></li>
                    <li><a href="">Cuenta</a></li>
                    <li><a href="">Menu</a></li>
                </ul>
            </nav>
            <button onClick={openMenu} id="check" className="nav-btn">
                Menu
            </button>
            <div
                id="menu-backdrop"
                style={menuBackdrop}
            >
            </div>
        </header>
    )
}