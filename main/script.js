function selecionar1(){
	j1 = document.getElementById('j1')
	j2 = document.querySelector('input#j2')
	j1.style.color = 'blue'
	j2.setAttribute('placeholder', '')
}

function selecionar2(){
	j1 = document.getElementById('j10')
	j2 = document.querySelector('input#j20')
	j1.style.color = 'blue'
	j2.setAttribute('placeholder', '')
}

function salvar() {
	j1 = document.querySelector('input#j2').value
	localStorage.setItem('valuej1', j1)
	j2 = document.querySelector('input#j20').value
	localStorage.setItem('valuej2', j2)
	window.location.href = "index.html";
}

var p1 = 0
var p2 = 0
var texto = document.getElementById('text')
var txt = document.getElementById('res4')
var txt_1 = document.getElementById('res5')
var txt_2 = document.getElementById('res6')
text.innerHTML = `A vez do jogador(a) ${localStorage.getItem('valuej1')}`


function pedra() {
	if (p1 == 0) {
		p1 = 'pedra'
		text.innerHTML = `A vez do jogador(a) ${localStorage.getItem('valuej2')}`
	} else if (p2 == 0){
		p2 = 'pedra'
		texto.innerHTML = `Joguem`
	}else{
		window.alert('Dois jogadores já selecionados')
	}
}

function papel() {
	if (p1 == 0) {
		p1 = 'papel'
		text.innerHTML = `A vez do jogador(a) ${localStorage.getItem('valuej2')}`
	} else if (p2 == 0){
		p2 = 'papel'
		texto.innerHTML = `Joguem`
	}else{
		window.alert('Dois jogadores já selecionados')
	}
}

function tesoura() {
	if (p1 == 0) {
		p1 = 'tesoura'
		text.innerHTML = `A vez do jogador(a) ${localStorage.getItem('valuej2')}`
	} else if (p2 == 0){
		p2 = 'tesoura'
		texto.innerHTML = `Joguem`
	}else{
		window.alert('Dois jogadores já selecionados')
	}
}

function jogar() {
	if (p1 != 0 && p2 != 0){
		if (p1 == p2){
			var resultado = 'Empate'
		} else if (p1 == 'pedra' && p2 == 'tesoura'){
			var resultado = localStorage.getItem('valuej1')
			var select1 = 'Pedra.jpg'
			var select2 = 'tesoura.jpg'
		} else if (p1 == 'pedra' && p2 == 'papel'){
			var resultado = localStorage.getItem('valuej2')
			var select1 = 'Pedra.jpg'
			var select2 = 'papel.jpg'
		} else if (p1 == 'papel' && p2 == 'pedra'){
			var resultado = localStorage.getItem('valuej1')
			var select1 = 'papel.jpg'
			var select2 = 'Pedra.jpg'
		} else if (p1 == 'papel' && p2 == 'tesoura'){
			var resultado = localStorage.getItem('valuej2')
			var select1 = 'papel.jpg'
			var select2 = 'tesoura.jpg'
		} else if (p1 == 'tesoura' && p2 == 'pedra'){
			var resultado = localStorage.getItem('valuej2')
			var select1 = 'tesoura.jpg'
			var select2 = 'Pedra.jpg'
		} else if (p1 == 'tesoura' && p2 == 'papel'){
			var resultado = localStorage.getItem('valuej1')
			var select1 = 'tesoura.jpg'
			var select2 = 'papel.jpg'
		}
		var img1 = document.getElementById('img1')
		var img2 = document.getElementById('img2')
		var img3 = document.getElementById('img3')
		var res1 = document.getElementById('res1')
		var res2 = document.getElementById('res2')
		var res3 = document.getElementById('res3')
		setTimeout(function() {img1.setAttribute('src', 'j.png')}, 0);
		setTimeout(function() {img2.setAttribute('src', 'ken.png')}, 2000);
		setTimeout(function() {img3.setAttribute('src', 'po.png')}, 4000);

		setTimeout(function() {
			txt.style.color = 'white'
			txt.innerHTML = `Jogador ${localStorage.getItem('valuej1')}`
			txt_1.style.color = 'white'
			txt_1.innerHTML = `Jogador ${localStorage.getItem('valuej2')}`
			txt_2.style.color = 'white'
			img3.remove()
			if (resultado == 'Empate'){
				res1.innerHTML = 'O jogo'
				res2.innerHTML = 'Deu'
				res3.innerHTML = 'Empate'
			}else{
			img1.setAttribute('src', `${select1}`)
			img2.setAttribute('src', `${select2}`)
			res3.innerHTML = `Jogador(a) ${resultado} ganhador`}
		}, 5000);
	} else {
		window.alert('Valores não selecionados')
	}
}

function retornar(){
	window.location.reload(true);
}