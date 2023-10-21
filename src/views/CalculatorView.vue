<template>
  <div class="calculator">
    <input type="text" v-model="inputCalc" readonly />
    <div class="digits">
      <div
        v-for="digit in digits"
        v-bind:key="digit"
        class="digit"
        v-on:click="handleDigitClick(digit)"
      >
        {{ digit }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "calculator-view",
  watch: {
    inputCalc() {
      console.log(this.inputCalc)
    },
  },
  data() {
    return {
      digits: [
        "(",
        ")",
        "*",
        "+",
        "-",
        7,
        8,
        9,
        4,
        5,
        6,
        1,
        2,
        3,
        0,
        "\u2190",
        ".",
        "\u0025",
        "AC",
        "=",
      ],
      inputCalc: "",
    }
  },
  methods: {
    handleDigitClick(digit) {
      console.log(digit)
      switch (digit) {
        case "=": {
          this.inputCalc = eval(this.inputCalc).toString()
          return
        }
        case "AC": {
          this.inputCalc = ""
          return
        }
        case "\u2190": {
          if (!this.inputCalc) return
          this.inputCalc = this.inputCalc.slice(0, this.inputCalc.length - 1)
          return
        }
        default: {
          if (
            this.inputCalc.startsWith("0") &&
            !this.inputCalc.startsWith("0.") &&
            digit !== "."
          ) {
            this.inputCalc = this.inputCalc.slice(1)
          }
          this.inputCalc += digit.toString()
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.calculator {
  max-width: 450px;
  width: 100%;
  background-color: #333333;
  padding: 24px;
  margin: auto;
  border-radius: 8px;

  input {
    background-color: #1a1a1a;
    color: #fff;
    padding: 16px 8px;
    margin-bottom: 12px;
    border-radius: 6px;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    text-align: right;
    letter-spacing: 1px;
  }
}

.digits {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.digit {
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  border-radius: 6px;
  padding: 12px;
  cursor: pointer;
}
</style>
