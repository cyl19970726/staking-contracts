const { web3 } = require("hardhat");
const { expect } = require("chai");
const { ethers } = require("hardhat");
const { inputToConfig } = require("@ethereum-waffle/compiler");


const  BlockRlpBytes = "0xf9035ff9035aa0112233445566778899001122334455667788990011223344556677889900aabba0000033445566778899001122334455667788990011223344556677889900aabb94d76fb45ed105f1851d74233f884d256c4fdad634a01100000000000000000000000000000000000000000000000000000000000011a02200000000000000000000000000000000000000000000000000000000000022a03300000000000000000000000000000000000000000000000000000000000033b9010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000822af88227118703328b9554a1b68501dce452ff8405e30a3cb8b00101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101a04400000000000000000000000000000000000000000000000000000000000044880102030405060708820309830c9f1bf85494aa000000000000000000000000000000000000aa94bb000000000000000000000000000000000000bb94dd000000000000000000000000000000000000bb94cc000000000000000000000000000000000000bbc401020304a0cc000000000000000000000000000000000000000000000000000000000000cce46402a000cc000000000000000000000000000000000000000000000000000000000000c0c0c0";
describe("decode block test", function(){

    let db
    beforeEach(async() => {
        let factory = await ethers.getContractFactory("DecodeBlockTest")
        db = await factory.deploy()
        await db.deployed()
    })

    it("decode Header", async function(){
        let res = await db.DecodeHeaderTest(BlockRlpBytes)
        console.log(res)
    })

    it("decode hashData", async function(){
        let res = await db.DecodeHashDataTest(BlockRlpBytes)
        // console.log(res)
    })

    it("decode baseData", async function(){
        let res = await db.DecodeBaseDataTest(BlockRlpBytes)
        // console.log(res)
    })

    it("decode ValidatorData", async function(){
        let res = await db.DecodeValidatorDataTest(BlockRlpBytes)
        // console.log(res)

    })

    it("decode NextValidators",async function(){
        // only one validator 
        const OneValidatorRlpBytes = "0xf902faf902f5a0112233445566778899001122334455667788990011223344556677889900aabba0000033445566778899001122334455667788990011223344556677889900aabb94d76fb45ed105f1851d74233f884d256c4fdad634a01100000000000000000000000000000000000000000000000000000000000011a02200000000000000000000000000000000000000000000000000000000000022a03300000000000000000000000000000000000000000000000000000000000033b9010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000822af88227118703328b9554a1b68501dce452ff8405e30a3cb8b00101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101a04400000000000000000000000000000000000000000000000000000000000044880102030405060708820309830c9f1bd594aa000000000000000000000000000000000000aac401020304a0cc000000000000000000000000000000000000000000000000000000000000ccc0c0"
        let res = await db.DecodeNextValidatorsTest(OneValidatorRlpBytes)
        // console.log(res)

        // more than one validator
        res = await db.DecodeNextValidatorsTest(BlockRlpBytes)
        // console.log(res)
    })

    it("decode commit",async function(){
        let res = await db.DecodeCommitTest(BlockRlpBytes)
        // console.log(res)
    })
})