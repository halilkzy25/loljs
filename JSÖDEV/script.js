document.getElementById("lıstekarakter").addEventListener("change", yer)
let sonuc = document.getElementById("sonucBaslık")

function yer() {
    sonuc.classList.remove("Garen", "Lucian", "Sylas", "Galio", "normal")
    let karakter = document.getElementById("lıstekarakter").selectedIndex
    if (karakter == 1) {
        document.body.style.backgroundColor = "yellow"
        sonuc.innerHTML = "Yüce Kral Garen"
        sonuc.classList.add("Garen")
        document.getElementById("logo").setAttribute("src", "Garen.jpg")
    } else if (karakter == 2) {
        document.body.style.backgroundColor = "orange"
        sonuc.innerHTML = "Gölge Cellat Kayn"
        sonuc.classList.add("Lucian")
        document.getElementById("logo").setAttribute("src", "Lucian.jpg")
    } else if (karakter == 3) {
        document.body.style.backgroundColor = "grey"
        sonuc.innerHTML = "Darkin Kılıcı Aatrox"
        sonuc.classList.add("Sylas")
        document.getElementById("logo").setAttribute("src", "Sylas.jpg")
    } else if (karakter == 4) {
        document.body.style.backgroundColor = "white "
        sonuc.innerHTML = "Günahkâr Kılıç Yasuo"
        sonuc.classList.add("Galio")
        document.getElementById("logo").setAttribute("src", "Galio.jpg")
    }
}

