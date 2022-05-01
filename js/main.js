"use strict";
class MakeTicTacToe {
    constructor(){
      this.input = 'x'
      this.x = 'https://cdn.glitch.global/b67293a0-e18f-4b54-a480-811f427e7587/x.png?v=1651195263455'
      this.o = 'https://cdn.glitch.global/b67293a0-e18f-4b54-a480-811f427e7587/o.png?v=1651195266354'
      this.cells = Array.from(document.querySelectorAll('.cell'))

     this.cells.forEach(cell => cell.addEventListener('click', this.updateBoard.bind(this)))
    }
    updateBoard(click) {
      let cell = click.target
      let classes = cell.classList
      let id = cell.getAttribute('id')
      if (!classes.contains('marked')) {
        click.target.textContent = this.input;
        click.target.classList.add('marked')
        this.input === 'x' ? this.input = 'o' : this.input = 'x';
        this.winner()
      }
    }
    cell(num) {
      return this.cells[num].textContent
    }
    comparisons(one, two, three) {
      if ((this.cell(one) === this.cell(two)) && (this.cell(two) === this.cell(three))){
        if (this.cell(one) !== '' && this.cell(two) !== '' && this.cell(three) !== '') {
            this.cells.forEach(element => element.classList.add('marked'))
            this.cell(one) === 'x' ? document.querySelector('h1').innerText = 'Player  X    wins!' : document.querySelector('h1').innerText = 'Player O     wins!'
            }
        }
    }
    winner() {
        this.comparisons(0,4,8)
        this.comparisons(2,4,6)
        this.comparisons(0,1,2)
        this.comparisons(3,4,5)
        this.comparisons(6,7,8)
        this.comparisons(0,3,6)
        this.comparisons(1,4,7)
        this.comparisons(2,5,8)
        if(this.cells.every(x => x.classList.contains('marked'))) {
          if (document.querySelector('h1').textContent === '') {
            document.querySelector('h1').innerText = 'Tie!'
          }
      }
    }
  }
  
  let board = new MakeTicTacToe()
 