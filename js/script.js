const sideNav = document.querySelectorAll(".sidenav");
M.Sidenav.init(sideNav);

const slide = document.querySelectorAll(".slider");
M.Slider.init(slide,{
    indicators: false,
    height: 420,
    duration: 1000,
});

const parallax = document.querySelectorAll(".parallax");
M.Parallax.init(parallax);

const material = document.querySelectorAll(".materialboxed");
M.Materialbox.init(material);

const scroll = document.querySelectorAll(".scrollspy");
M.ScrollSpy.init(scroll, {
    scrollOffset: 40
});


