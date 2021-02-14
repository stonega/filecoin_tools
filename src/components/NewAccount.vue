<template>
  <div class="new-account">
    <div class="button-list" v-if="filecoinAccount.address === undefined">
      <img src="../assets/undraw_mindset.svg" alt="mindset" />
      <Row jItems="center">
        <input type="radio" id="secp" value="secp" v-model="type" />
        <label for="secp">SECP256K1</label>
        <input type="radio" id="bls" value="bls" v-model="type" />
        <label for="bls">BLS</label>
        <div class="divider"></div>
        <input type="radio" id="f" value="f" v-model="network" />
        <label for="f">f</label>
        <input type="radio" id="t" value="t" v-model="network" />
        <label for="t">t</label>
      </Row>
      <div class="button" v-on:click="generateNewAccount">Generate</div>
      <div class="button">Recover from mnemonic</div>
    </div>
    <div class="account-detail" v-else>
      <Row reverse="true" jContent="start">
        <div class="circle-button" v-on:click="filecoinAccount = {}">Clear</div>
        <div class="circle-button">Add</div>
      </Row>
      <section class="address">
        <div class="address-info">
          <div>Bls Address</div>
          <div>m/44'/461'/0/0/1</div>
        </div>
        <h3>
          <div class="account-text">{{ filecoinAccount.address }}</div>
        </h3>
      </section>
      <Row jContent="space-between">
        <div class="key-text">
          <div class="kye-title">Public Key</div>
          <h4>
            {{ filecoinAccount.publicKey }}
          </h4>
        </div>
        <div class="key-text">
          <div class="kye-title">Private Key</div>
          <h4>
            {{ filecoinAccount.privateKey }}
          </h4>
        </div>
        <div class="key-text">
          <div class="kye-title">Mnemonic</div>
          <h4>
            {{ filecoinAccount.mnemonic }}
          </h4>
        </div>
      </Row>
    </div>
  </div>
</template>

<script>
import Row from "./Row.vue";
export default {
  name: "NewAccount",
  components: {
    Row,
  },
  data: () => {
    return {
      type: "bls",
      network: "f",
      filecoinAccount: {},
    };
  },
  methods: {
    generateNewAccount: async function () {
      const account = await import("../js/account.js");
      const mnemonic = account.getMnemonic();
      this.filecoinAccount = await account.newAccount(mnemonic);
    },
  },
};
</script>

<style>
img {
  width: 300px;
  height: 300px;
}
.new-account {
  width: 800px;
  height: 80vh;
  position: relative;
  background-color: antiquewhite;
  border-radius: 0px 20px 20px 0;
}

.button-list {
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
}

.button {
  width: 200px;
  margin-bottom: 1em;
  text-align: center;
  font-weight: 700;
  padding: 1em 1em;
  background-color: cyan;
  border-radius: 100px 100px 100px 100px;
  border-style: solid 4px grey;
}
.button:hover {
  background-color: aquamarine;
  cursor: pointer;
}

.account-detail {
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
}

.address {
  padding: 1em;
  background-color: aliceblue;
  border-radius: 20px 20px 20px 20px;
}

.address-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.account-text {
  color: coral;
  text-align: left;
  word-wrap: break-word;
}

.keypair {
  margin-top: 1em;
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
}

.key-text {
  width: 200px;
  padding: 1em;
  background-color: aliceblue;
  border-radius: 20px 20px 20px 20px;
  word-wrap: break-word;
}
.key-title {
  color: burlywood;
}

.circle-button {
  margin-bottom: 1em;
  margin-left: 1em;
  text-align: center;
  font-weight: 700;
  padding: 0.5em 1em;
  border-radius: 100px 100px 100px 100px;
  border: solid 2px grey;
}
.circle-button:hover {
  background-color: aquamarine;
  cursor: pointer;
}

.protocal {
  padding: 1em;
}

.network {
  padding: 1em;
}

.divider {
  width: 20px;
  padding: 2em;
}
</style>
