const sections = ["info-squirtle", "caracteristicas",
    "curiosidades", "artigo-squirtle", "recursos", "evolucao"]

const sectionsName = ["Informações sobre Squirtle", "Características",
    "Curiosidades", "Artigo sobre Squirtle", "Recursos Adicionais", "Evolução"]

//----------------HEADER-----------------//
function createHeader() {
    let header = document.querySelector('#header')

    let a = document.createElement('a')
    a.setAttribute('href', './index.html')

    let h1 = document.createElement('h1')
    let titulo = document.createTextNode("Squirtle")

    h1.appendChild(titulo)
    a.appendChild(h1)
    header.appendChild(a)
}

//----------------NAV-----------------//
function createNav(sec, secName) {
    let nav = document.querySelector('nav')

    let ul = document.createElement('ul')
    sec.forEach((secoes, contador) => {
        let li = document.createElement('li')
        let a = document.createElement('a')
        a.setAttribute('href', `#${secoes}`)
        let nome = document.createTextNode(secName[contador])
        a.appendChild(nome)
        li.appendChild(a)
        ul.appendChild(li)
        nav.appendChild(ul)
    })
}

//----------------FOOTER-----------------//
function createFooter() {
    let footer = document.querySelector('footer')

    let atributes = ["#header", "mailto:contato@squirtlepage.com", "tel:+5555555555"]
    let description = ["Voltar para o topo", "Contato via e-mail", "Telefone: (55) 5555-5555"]

    let p = document.createElement('p')
    let texto = document.createTextNode('&copy; 2024 Página do Pokémon Squirtle. Todos os direitos reservados.')
    p.setAttribute('arial-label', "Copyright")
    p.appendChild(texto)
    footer.appendChild(p)
    atributes.forEach((atr, contador) => {
        let p2 = document.createElement('p')
        let a = document.createElement('a')
        let desc = document.createTextNode(description[contador])
        a.setAttribute('href', `${atr}`)
        a.appendChild(desc)
        p2.appendChild(a)
        footer.appendChild(p2)
    })
}

//----------------MAIN-----------------//
function sec1() {
    let s1 = document.getElementById('info-squirtle')

    let div = document.createElement('div')
    let img1 = document.createElement('img')
    let img2 = document.createElement('img')
    let p = document.createElement('p')
    let texto = document.createTextNode("Squirtle é um Pokémon do tipo Água. É o Pokémon inicial da região de Kanto e evolui para Wartortle.")

    img1.setAttribute('src', "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png")
    img1.setAttribute('alt', 'Squirtle 1')
    img2.setAttribute('src', "https://archives.bulbagarden.net/media/upload/thumb/7/79/Squirtle_SSBU.png/200px-Squirtle_SSBU.png")
    img2.setAttribute('alt', 'Squirtle 2')

    p.appendChild(texto)
    div.appendChild(img1)
    div.appendChild(img2)
    s1.appendChild(div)
    s1.appendChild(p)
}

function sec2() {
    let s2 = document.getElementById('caracteristicas')

    let p = document.createElement('p')
    let texto = document.createTextNode("Squirtle é conhecido por sua concha nas costas, que oferece proteção adicional. Ele possui ataques de água poderosos, como Water Gun e Hydro Pump.")
    p.appendChild(texto)
    s2.appendChild(p)
}

function sec3() {
    let s3 = document.getElementById('curiosidades')

    const curiosidades = ["Squirtle é um dos Pokémon mais populares e adoráveis.",
        "Seu nome deriva das palavras 'squirrel' (esquilo) e 'turtle' (tartaruga).",
        "Squirtle é frequentemente escolhido por treinadores para começar suajornada Pokémon."
    ]

    let ul = document.createElement('ul')
    curiosidades.forEach((curi) => {
        let li = document.createElement('li')
        let texto = document.createTextNode(curi)
        li.appendChild(texto)
        ul.appendChild(li)
    })
    s3.appendChild(ul)
}

function sec4() {
    let s4 = document.getElementById('artigo-squirtle')

    const paragraphs = ["Squirtle, com sua aparência simpática e sua habilidade em controlar a água, conquistou o coração de treinadores Pokémon ao redor do mundo. Sendo o inicial de água na região de Kanto, Squirtle é uma escolha popular para aqueles que buscam equilíbrio e versatilidade em suas equipes.",
        "Sua concha nas costas não apenas oferece proteção, mas também é um símbolo de resistência. Ao evoluir para Wartortle e, posteriormente, para Blastoise, Squirtle se transforma em uma força formidável, dominando ataques aquáticos que podem surpreender adversários em batalhas.",
        "Além de suas habilidades de batalha, Squirtle é conhecido por seu carisma. Treinadores muitas vezes descrevem a relação com seu Squirtle como uma amizade profunda, tornando-o não apenas um companheiro de lutas, mas um amigo leal ao longo de suas jornadas."
    ]

    paragraphs.forEach((info) => {
        let p = document.createElement('p')
        let text = document.createTextNode(info)
        p.appendChild(text)
        s4.appendChild(p)
    })
}

function sec5() {
    let s5 = document.getElementById('recursos')

    let ul = document.createElement('ul')
    let links = ["https://www.pokemon.com/br/pokedex/squirtle",
        "https://bulbapedia.bulbagarden.net/wiki/Squirtle_(Pok%C3%A9mon)"
    ]
    let names = ["Pokédex - Squirtle", "Bulbapedia - Squirtle"]
    links.forEach((link, contador) => {
        let li = document.createElement('li')
        let a = document.createElement('a')
        let name = document.createTextNode(names[contador])
        a.setAttribute('target', "_blank")
        a.setAttribute('href', link)
        a.appendChild(name)
        li.appendChild(a)
        ul.appendChild(li)
    })
    s5.appendChild(ul)
}

function sec6() {
    let s6 = document.getElementById('evolucao')

    let images = ["https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/008.png",
        "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/009.png"
    ]
    let names = ["Squirtle", "Wartortle", "Blastoise"]
    let ul = document.createElement('ul')
    names.forEach((name, contador) => {
        let li = document.createElement('li')
        let figure = document.createElement('figure')
        let img = document.createElement('img')
        img.setAttribute('src', images[contador])
        img.setAttribute('alt', name)
        let figucaption = document.createElement('figcaption')
        let desc = document.createTextNode((contador + 1) + ". " + name)

        figucaption.appendChild(desc)
        figure.appendChild(img)
        figure.appendChild(figucaption)
        li.appendChild(figure)
        ul.appendChild(li)
    })

    s6.appendChild(ul)
}

function createMain(sec) {
    let main = document.querySelector('#main')

    let secAndH2Atribute = ["info-squirtle-label", "caracteristicas-label",
        "curiosidades-label", "artigo-squirtle-label", "recursos-label", "evolucao-label"]

    let h2Title = ["Informações sobre Squirtle", "Características",
        "Curiosidades", "Squirtle: O Amigo Aquático", "Recursos Adicionais", "Evoluções"]

    sec.forEach((secoes, contador) => {
        var section = document.createElement('section')

        section.setAttribute('id', `${secoes}`)
        section.setAttribute('arial-label', `${secAndH2Atribute[contador]}`)
        var h2 = document.createElement('h2')
        h2.setAttribute('id', `${secAndH2Atribute[contador]}`)
        var title = document.createTextNode(h2Title[contador])
        h2.appendChild(title)
        section.appendChild(h2)
        main.appendChild(section)
    })
    sec1()
    sec2()
    sec3()
    sec4()
    sec5()
    sec6()
}

createHeader()
createNav(sections, sectionsName)
createFooter()
createMain(sections)
