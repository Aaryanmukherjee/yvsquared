let h=0;
for(const d of document.querySelectorAll('div.project p.description')){

    h = Math.max(h,d.clientHeight)

}
for(const d of document.querySelectorAll('div.project p.description')){

    d.style.height = `${h}px`

}

