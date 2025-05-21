const DATA = [
    {
        id:'01',
        nome:'Astro Boy' ,
        nota:'10,0',
        imagem:'https://musicart.xboxlive.com/7/e5ab1100-0000-0000-0000-000000000002/504/image.jpg',
        sinopse: 'Metro City é uma cidade flutuante, onde um brilhante cientista chamado Tenma cria um menino robô, que possui uma superforça, tem visão de raio-X e capacidade de voar. Astro Boy decide explorar o mundo, procurando ser aceito pelos seres humanos. Um dia, quando ele pensa que seus amigos e a família em Metro City estão em perigo, ele volta para a cidade e usa seus poderes para salvá-los.'
    },

    {
        id:'02',
        nome:'Carros' ,
        nota:'10,0',
        imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR15YJuAxA6x_0uGm11QOvYzlRrVLa02movbg&s',
        sinopse: 'Ao viajar para a Califórnia, o famoso carro de corridas Relâmpago McQueen se perde e vai parar em Radiator Springs, uma cidadezinha na Rota 66. Ele conhece novos amigos e aprende lições que mudam sua forma de encarar a vida.'
    },

    {
        id:'03',
        nome:'A Casa Monstro' ,
        nota:'10,0',
        imagem:'https://m.media-amazon.com/images/S/pv-target-images/79e7bef3ae4dd19f3b9f0ed67116151935568990b176353cdfc449e66772e20e.jpg',
        sinopse: 'Nenhum adulto acredita quando três adolescentes falam que existe uma casa no bairro que é uma criatura perigosa. Com o Dia das Bruxas se aproximando, eles têm que descobrir uma forma de destruir a casa antes que ela faça mal a crianças inocentes.'
    },

    {
        id:'04',
        nome:'Brinquedo Assassino' ,
        nota:'10,0',
        imagem:'https://br.web.img2.acsta.net/pictures/14/10/10/18/18/494547.jpg',
        sinopse: 'Uma mulher compra para seu filho um boneco amaldiçoado por um assassino em série morto dentro uma loja de brinquedos. Pouco antes, ele faz um ritual de vodu com o boneco, que ganha vida e se torna um perigoso psicopata.'
    },

    {
        id:'05',
        nome:'Como Treinar o Seu Dragão' ,
        nota:'10,0',
        imagem:'https://m.media-amazon.com/images/S/pv-target-images/dbe903215a73ca6c426d01d8534dcfe775de0ea574bfc3d390427eb25ccf25f8.jpg',
        sinopse: 'Soluço é um jovem viking que não tem capacidade para lutar contra os dragões, como é a tradição local. Sua vida muda quando ele ajuda um dragão que lhe mostra toda a verdade. Juntos, eles tentam provar que dragões e humanos podem ser amigos.'
    },

    {
        id:'06',
        nome:'Festa Da Salsicha' ,
        nota:'10,0',
        imagem:'https://upload.wikimedia.org/wikipedia/pt/0/0b/Sausage_Party_p%C3%B4ster.jpg',
        sinopse: 'Frank, a salsicha, e seus amigos tentam evitar serem comprados e comidos por humanos em um supermercado.'
    },

    {
        id:'07',
        nome:'Os Incríveis' ,
        nota:'10,0',
        imagem:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG8nlZ77lcFWsWVys5EnQrhUGwkIqYXOmS0w&s',
        sinopse: 'Depois do governo banir o uso de superpoderes, o maior herói do planeta, o Sr. Incrível, vive de forma pacata com sua família. Apesar de estar feliz com a vida doméstica, o Sr. Incrível ainda sente falta dos tempos em que viveu como super-herói, e sua grande chance de entrar em ação novamente surge quando um velho inimigo volta a atacar. Só que agora ele precisa contar com a ajuda de toda a família para vencer o vilão.'
    },

    {
        id:'08',
        nome:'Jack Frost' ,
        nota:'10,0',
        imagem:'https://m.media-amazon.com/images/I/71fSqE6af2L._AC_UF1000,1000_QL80_.jpg',
        sinopse: 'Jack Frost é um cantor que viaja constantemente e nunca tem muito tempo para sua esposa, Gabby, e seu filho, Charlie. Um ano após a trágica morte de Jack, em um acidente de carro, no dia de Natal, Charlie toca uma música na gaita de seu pai. Para sua surpresa, Frost retorna como um boneco de neve. Charlie e Jack tentam recuperar o tempo perdido.'
    },

    {
        id:'09',
        nome:'Madagascar' ,
        nota:'10,0',
        imagem:'https://m.media-amazon.com/images/I/91jNNsw2KOL._AC_UF1000,1000_QL80_.jpg',
        sinopse: 'O leão Alex é o rei da selva urbana, a principal atração no zoológico de Nova York. Ele e seus melhores amigos - a zebra Marty, a girafa Melman e a hipopótamo fêmea Gloria - sempre viveram em cativeiro, felizes, com refeições regulares e um público para adorá-los. No entanto, Marty quer explorar o mundo e foge com a ajuda dos pinguins.'
    },

    {
        id:'10',
        nome:'Megamente' ,
        nota:'10,0',
        imagem:'https://upload.wikimedia.org/wikipedia/pt/0/02/Megamind_Capa.jpg',
        sinopse: 'Embora seja o vilão mais brilhante que o mundo já conheceu, Megamente é o menos bem-sucedido. Derrotado repetidamente pelo heroico Metro Man, ele fica surpreso quando finalmente consegue derrotar o seu inimigo de longa data. Porém, sem Metro Man, Megamente não tem nenhum propósito na vida, então ele cria um novo adversário que logo decide que é mais divertido ser um vilão que um herói.'
    },

    {
        id:'11',
        nome:'Meu Malvado Favorito' ,
        nota:'10,0',
        imagem:'https://m.media-amazon.com/images/I/61-8UaTgUGL._AC_UF1000,1000_QL80_.jpg',
        sinopse: 'Um homem que adora todas as coisas diabólicas, o supervilão Gru traça um plano para roubar a lua. Rodeado de um exército de pequenos ajudantes e seu arsenal de armas e máquinas de guerra, Gru se prepara para destruir quem atravessar seu caminho. Mas ele não esperava pelo seu maior desafio: três adoráveis órfãs que querem ter Gru como pai.'
    },

    {
        id:'12',
        nome:'Monstros vs. Alienígenas' ,
        nota:'10,0',
        imagem:'https://upload.wikimedia.org/wikipedia/pt/7/76/Monsters-vs-aliens-poster.jpg',
        sinopse: 'Susan Murphy é atingida por um meteoro e se transforma em uma gigante. O governo dá um novo nome a ela. Ela acaba sendo levada para uma área restrita e mantida com outros monstros. Um dia, quando outros alienígenas chegam à Terra, o governo pede a ajuda de Susan e dos demais monstros para salvar o planeta.'
    },

    {
        id:'13',
        nome:'Monstros S.A.' ,
        nota:'10,0',
        imagem:'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/87/82/86/19961967.jpg',
        sinopse: 'A maior fábrica de monstros do mundo conta com James Sullivan, um dos monstros mais assustadores, que tem o pelo azul e chifres, além de seu assistente e melhor amigo Mike, um monstro verde de um olho só. Eles têm por missão assustar as crianças, que são consideradas tóxicas pelos monstros e cujo contato com eles seria catastrófico para seu mundo. Porém, ao visitar o mundo dos humanos a trabalho, Mike e Sully conhecem a garota Boo, que acaba sem querer indo parar no mundo dos monstros.'
    },

    {
        id:'14',
        nome:'Operação Big Hero' ,
        nota:'10,0',
        imagem:'https://m.media-amazon.com/images/S/pv-target-images/b0b0ae8813d15b7eba1824fe45307965a5977003f099c7b1557a736ca2abe0de.jpg',
        sinopse: 'Na cidade high-tech de San Fransokyo, o prodígio da robótica Hiro Hamada testemunha a paz local ser ameaçada por forças poderosas e, acompanhado pelo robô Baymax, se une a um time de combatentes inexperientes, porém determinado a enfrentar os inimigos e salvar o paraíso futurista da destruição.'
    },

    {
        id:'15',
        nome:'Por Água Abaixo' ,
        nota:'10,0',
        imagem:'https://upload.wikimedia.org/wikipedia/pt/a/a0/PorAguaAbaixo.jpg',
        sinopse: 'Roddy é um ratinho acostumado a um bairro luxuoso de Londres. Sem querer, ele dá uma descarga infeliz e acaba nos esgotos, onde terá de aprender a viver de uma forma completamente diferente.'
    },

    {
        id:'16',
        nome:'Shrek' ,
        nota:'10,0',
        imagem:'https://upload.wikimedia.org/wikipedia/pt/e/e6/Shrek_Poster.jpg',
        sinopse: 'Um ogro tem sua vida invadida por personagens de contos de fadas que acabam com a tranquilidade de seu lar. Ele faz um acordo pra resgatar uma princesa.'
    }
]

export default DATA;