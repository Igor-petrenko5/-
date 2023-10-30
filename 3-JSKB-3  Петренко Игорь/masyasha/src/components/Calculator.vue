<template>
    <div class="calculator">
      <div class="display">{{ display }}</div>
      <div class="buttons">
        <div class="row">
          <button class="button" v-on:click="addDigit(7)">7</button>
          <button class="button" v-on:click="addDigit(8)">8</button>
          <button class="button" v-on:click="addDigit(9)">9</button>
          <button class="button orange" v-on:click="addSymbol('+')">+</button>
        </div>
        <div class="row">
          <button class="button" v-on:click="addDigit(4)">4</button>
          <button class="button" v-on:click="addDigit(5)">5</button>
          <button class="button" v-on:click="addDigit(6)">6</button>
          <button class="button orange" v-on:click="addSymbol('-')">-</button>
        </div>
        <div class="row">
          <button class="button" v-on:click="addDigit(1)">1</button>
          <button class="button" v-on:click="addDigit(2)">2</button>
          <button class="button" v-on:click="addDigit(3)">3</button>
          <button class="button orange" v-on:click="addSymbol('*')">*</button>
        </div>
        <div class="row">
          <button class="button" v-on:click="addDigit(0)">0</button>
          <button class="button" v-on:click="addDecimal()">.</button>
          <button class="button orange" v-on:click="calculate()">=</button>
          <button class="button orange" v-on:click="addSymbol('/')">/</button>
        </div>
      </div>
    </div>
  </template>
   
  <script>
  export default {
    name: 'CalculatorUser',
    data () {
      return {
        display: '0',
        operator: null,
        waitingForOperand: false,
        operand: null
      }
    },
    methods: {
      addDigit (digit) {
        if (this.waitingForOperand) {
          this.display = digit.toString()
          this.waitingForOperand = false
        } else {
          this.display = this.display === '0' ? digit.toString() : this.display + digit.toString()
        }
        this.operand = parseFloat(this.display)
      },
      addDecimal () {
        if (this.waitingForOperand) {
          this.display = '0.'
          this.waitingForOperand = false
        } else if (this.display.indexOf('.') === -1) {
          this.display += '.'
        }
        this.operand = parseFloat(this.display)
      },
      addSymbol (operator) {
        if (this.operator !== null) {
          this.calculate()
        }
        this.operator = operator
        this.waitingForOperand = true
      },
      calculate () {
        if (this.operator === null) {
          return
        }
        if (this.waitingForOperand) {
          this.operand = parseFloat(this.display)
        }
        switch (this.operator) {
          case '+':
            this.display = (this.operand + parseFloat(this.display)).toString()
            break
          case '-':
            this.display = (this.operand - parseFloat(this.display)).toString()
            break
          case '*':
            this.display = (this.operand * parseFloat(this.display)).toString()
            break
          case '/':
            this.display = (this.operand / parseFloat(this.display)).toString()
            break
        }
        this.operator = null
        this.waitingForOperand = true
      }
    }
  }
  </script>
   
  <style scoped>
  .calculator {
    width: 240px;
    border: 1px solid #232323;
    border-radius: 3px;
    background: #454444;
    margin: 10px auto;
    padding: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
    margin-top: 150px;
  }
   
  .display {
    height: 40px;
    line-height: 40px;
    font-size: 24px;
    text-align: right;
    padding: 8px;
    background: rgb(102, 102, 102);
    border: 1px solid #000000;
    border-radius: 3px;
    margin-bottom: 10px;
    color: white;
  }
   
  .buttons {
    display: flex;
    flex-direction: column;
  }
   
  .row {
    display: flex;
  }
   
  .button {
    flex: 1;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 18px;
    margin-right: 5px;
    margin-bottom: 5px;
    border: 1px solid #ccc;
    background: white;
    border-radius: 3px;
    cursor: pointer;
  }
   
  .orange {
    color: white;
    background: #8e5d99;
    border-color: #8e5d99;
  }
   
  .orange:hover {
    background: #523658;
    border-color: #4b3351;
  }
   
  </style>