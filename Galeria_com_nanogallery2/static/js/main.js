jQuery(document).ready(function () {
    jQuery("#my_nanogallery2").nanogallery2({
        items:[
        { src: 'bandeja1_1.jpg', srct: 'bandeja1_1.jpg', title: 'Bandeja1'},
        { src: 'bandeja1_2.jpg', srct: 'bandeja1_2.jpg', title: 'Bandeja2'},
        { src: 'bandeja1_3.jpg', srct: 'bandeja1_3.jpg', title: 'Bandeja3'}
        ],
        thumbnailWidth:  300,   //Comprimento da foto na horizontal
        thumbnailHeight: 200,   //Comprimentoda foto na vertical
        itemsBaseURL:    './fotos/',    //Caminho da foto a ser mostrada
        thumbnailGutterWidth: 20,   //espaçamento entre as fotos
        thumbnailBorderHorizontal: 20,  //Borda da foto na horizontal
        thumbnailBorderHorizontal: 10,  //Borda da foto na vertical
        galleryTheme: 'light',  //'dark', 'light' => cor tema da suua galeria.
        colorScheme: 'dark',
        thumbnailAlignment: 'center',   //'center', 'right', 'left', 'justified', 'fillWidth' => alinhamentodas imagens na tela.

        //características que a foto q etará a mostra terá
        thumbnailLabel: {
            position: 'onBottom', //ou 'overImage' => Mudança de como o título da imagem ficara nela.
            align: 'center',  //ou 'left' ou 'right' => mudança no local onde o título ficará na imagem.
            valign: 'bottom',  //top', 'middle', 'bottom' => Alinhamento vertical do texto.
            display: true,  //decide se o tírulo aparecerá na foto ou não.
            hideIcons: true,    //Decide se terá um ícone no título da imagem ou não.
            titleMaxLength: 0,  //Comprimento máximo do título a ser exibido.
            titleMultiLine: false,   // ou true => para que o título possa ter mais de uma linha.
            titleFontSize:  '1em',  // tamanho da fonte do título.
            displayDescription: false,  //Exibe ou oculta a descrição.
            

        }
    });
  });