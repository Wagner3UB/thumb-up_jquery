$function() {
	const btn_thumb = $('#thumbs');
	const contador = $('#thumbs .contador span');

	btn_thumb.on('click', onClick);

	function onClick() {
		if(btn_thumb.hasClass('disabled')){
			return;
		}

		let contagem = parseInt(contador.text());
		contador.text(contagem + 1);
		btn_thumb.addClass('disabled');

    //inserindo um texto dinamicamente por JSON
    //dentro do $() temos a tag que queremos criar e logo apos um elemento JSON do tipo texto, que irá adicionar um texto dentro da tag

		const p = $('<p>', {text : 'Obrigado pelo seu feedback!'});

    //o after() irá adicionar o valor dentro de seus parenteses APOS a variavel btn_thumb
		btn_thumb.after(p);
	};
});
