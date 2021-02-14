const bls = require('bls-eth-wasm');
const filecoin_signer = require('@zondax/filecoin-signing-tools');
const bip39 = require('bip39');
const filecoin_address = require('@glif/filecoin-address');

const path = "m/44'/461'/0/0/1";

export const getMnemonic = () => {
    return bip39.generateMnemonic();
}

export const newAccount = async (mnemonic) => {
    let key = filecoin_signer.keyDerive(mnemonic, path, '');
    const privateKey = key.private_hexstring;
    await bls.init(bls.BLS12_381);
    const sec = new bls.SecretKey();
    const sk = bls.fromHexStr(privateKey);
    sec.setLittleEndian(sk);
    sec.dump('secret key ');
    const pubKey = sec.getPublicKey();
    const publicKey = pubKey.serializeToHexStr();
    const address = filecoin_address.newBLSAddress(pubKey.serialize()).toString();
    const isAddress = filecoin_address.validateAddressString(address);
    if (isAddress) {
        const filecoinAccount = {
            mnemonic,
            privateKey,
            publicKey,
            address
        };
        return filecoinAccount;
    } else {
        throw('Error');
    }
}
