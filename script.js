$(document).ready(function() {
	var btn_thumb = $('#thumbs');
	var contador = $('#thumbs .contador span');

	btn_thumb.on('click', onClick);

	function onClick() {
		if(btn_thumb.hasClass('disabled')){
			return;
		}

		var contagem = parseInt(contador.text());
		contador.text(contagem + 1);
		btn_thumb.addClass('disabled');

    //inserindo um texto dinamicamente por JSON
    //dentro do $() temos a tag que queremos criar e logo apos um elemento JSON do tipo texto, que irá adicionar um texto dentro da tag

		var p = $('<p>', {text : 'Obrigado pelo seu feedback!'});

    //o after() irá adicionar o valor dentro de seus parenteses APOS a variavel btn_thumb
		btn_thumb.after(p);
	};
});

/*
Codigo criado por mim, onde eu adicionei o texto de feedback no html com display none, e aqui, troquei para block

$(document).ready(function(){

  let btn_thumb = $("#thumbs");
  let contador = $("#thumbs .contador span");
  let feedback = $(".feedback");
  
  btn_thumb.on("click", onClick);

  function onClick(){
    let contagem = parseInt(contador.text()); //transformar o texto em numero inteiro
    if(contagem < 1){
      contador.text(contagem + 1);
    };
    feedback.css("display", "block");
  };*/
