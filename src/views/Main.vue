<template>
    <div>

        <div class="position-relative">
            <!-- shape Hero -->
            <section class="section-shaped my-0">
                <div class="shape shape-style-1 shape-default shape-skew">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="container shape-container d-flex">
                    <div class="col px-0">
                        <div class="row">
                            <div class="col-lg-8">
                                <p class="display-3 text-white" style="font-size:66px">Hack on CKB
                                    <span style="font-size:50px">Let's make some noice on the fantastic platform</span>
                                </p>
                                <p class="lead  text-white"><b>The first hackathon on CKB from August 15th to August 23rd</b></p>
                                <div class="btn-wrapper">
                                    <base-button tag="a"
                                                 href="https://docs.nervos.org/"
                                                 class="mb-3 mb-sm-0"
                                                 type="info"
                                                 icon="ni ni-button-play"
                                                 target="_blank">
                                        Get started
                                    </base-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- 1st Hero Variation -->
        </div>
        <section class="section section-lg pt-lg-0 mt--150">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-spaceship" type="primary" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-primary text-uppercase"><b>PW Core</b></h6>
                                    <p class="description mt-3"><b>Build your dApps on CKB and run your dApps in Ethereum wallets, we are utilizing Etereum's infrastructure with magic.</b></p>
                                    <div>
                                        <badge type="primary" rounded>SDK</badge>
                                        <badge type="primary" rounded>JavaScript</badge>
                                        <badge type="primary" rounded>TypeScript</badge>
                                    </div>
                                    <base-button tag="a" icon="fa fa-github" href="https://github.com/lay2dev/pw-core" type="primary" class="mt-4" target="_blank" >
                                        GitHub
                                    </base-button>
                                    <base-button tag="a" icon="fa fa-code" href="https://docs.lay2.dev/" type="primary" class="mt-4" target="_blank">
                                        Docs
                                    </base-button>
                                    <base-button tag="a" icon="fa fa-cube" href="https://sd.lay2.dev/" type="white" class="mt-4" target="_blank">
                                        Simplest dApp
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-planet" type="success" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-success text-uppercase"><b>Lumos</b></h6>
                                    <p class="description mt-3"><b>Lumos is a full featured JavaScript / TypeScript based dapp framework for Nervos CKB. It aims to simplify dapp development on Nervos CKB.</b></p>
                                    <div>
                                        <badge type="success" rounded>SDK</badge>
                                        <badge type="success" rounded>JavaScript</badge>
                                        <badge type="success" rounded>TypeScript</badge>
                                    </div>
                                    <base-button tag="a" icon="fa fa-github" href="https://github.com/nervosnetwork/lumos" type="success" class="mt-4" target="_blank">
                                        GitHub
                                    </base-button>
                                    <base-button tag="a" icon="fa fa-cube" href="https://docs.nervos.org/docs/labs/lumos-nervosdao" type="white" class="mt-4" target="_blank">
                                        Nervos DAO
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-atom" type="warning" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-warning text-uppercase"><b>Capsule</b></h6>
                                    <p class="description mt-3"><b>Capsule is a development framework for creating smart contract scripts in Rust for Nervos' CKB layer 1 blockchain.</b></p>
                                    <div>
                                        <badge type="warning" rounded>Rust</badge>
                                        <badge type="warning" rounded>Contract</badge>
                                        <badge type="warning" rounded>Script</badge>
                                    </div>
                                    <base-button tag="a" icon="fa fa-github" href="https://github.com/nervosnetwork/capsule" type="warning" class="mt-4" target="_blank">
                                        GitHub
                                    </base-button>
                                    <base-button tag="a" icon="fa fa-code" href="https://github.com/nervosnetwork/capsule/wiki" type="warning" class="mt-4" target="_blank">
                                        Docs
                                    </base-button>
                                    <base-button tag="a" icon="fa fa-cube" href="https://docs.nervos.org/docs/labs/sudtbycapsule" type="white" class="mt-4" target="_blank">
                                        SUDT script
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style="height:80px"></div>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12">
                        <div class="row row-grid">
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-palette" type="default" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-default text-uppercase"><b>CKB Studio</b></h6>
                                    <p class="description mt-3"><b>CKB Studio is an IDE to develop CKB scripts for Nervos blockchain. It includes CKB compiler, block explorer, node and miner for local dev chain, Aggron testnet and the CKB mainnet.</b></p>
                                    <div>
                                        <badge type="default" rounded>IDE</badge>
                                        <badge type="default" rounded>Mac</badge>
                                        <badge type="default" rounded>Linux</badge>
                                    </div>
                                    <base-button tag="a" icon="fa fa-cloud-download" href="https://github.com/ObsidianLabs/CKB-Studio/releases" type="default" class="mt-4" target="_blank">
                                        Download
                                    </base-button>
                                    <base-button tag="a" icon="fa fa-medium" href="https://medium.com/nervos-ckb-israel/collection-of-ckb-studio-tutorials-9ffd573894" type="default" class="mt-4" target="_blank">
                                        Tutorial
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-istanbul" type="danger" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-danger text-uppercase"><b>Polyjuice</b></h6>
                                    <p class="description mt-3"><b>Polyjuice, which is an Ethereum compatible layer on top of Nervos CKB. By polyjuice we want to showcase that it is perfectly possible to use account model on Nervos CKB.</b></p>
                                    <div>
                                        <badge type="danger" rounded>Ethereum</badge>
                                        <badge type="danger" rounded>Account</badge>
                                        <badge type="danger" rounded>Rust</badge>
                                    </div>
                                    <base-button tag="a" icon="fa fa-github" href="https://github.com/nervosnetwork/polyjuice" type="danger" class="mt-4" target="_blank">
                                        GitHub
                                    </base-button>
                                </card>
                            </div>
                            <div class="col-lg-4">
                                <card class="border-0" hover shadow body-classes="py-5">
                                    <icon name="ni ni-laptop" type="info" rounded class="mb-4">
                                    </icon>
                                    <h6 class="text-info text-uppercase"><b>Keypering</b></h6>
                                    <p class="description mt-3"><b>Keypering ia a Nervos CKB desktop wallet prototype for dApp interaction.</b></p>
                                    <div>
                                        <badge type="info" rounded>Desktop Wallet</badge>
                                        <badge type="info" rounded>Keyper</badge>
                                    </div>
                                    <base-button tag="a" icon="fa fa-github" href="https://github.com/liusong1111/keypering" type="info" class="mt-4" target="_blank">
                                        GitHub
                                    </base-button>
                                    <base-button tag="a" icon="fa fa-medium" href="https://medium.com/nervosnetwork/introducing-keyper-for-cell-management-on-nervos-8e5a8a42fa5f" type="info" class="mt-4" target="_blank">
                                        Introduction
                                    </base-button>
                                </card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-lg">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-md-2">
                        <img src="img/theme/promo-1.png" class="img-fluid floating">
                    </div>
                    <div class="col-md-6 order-md-1">
                        <div class="pr-md-5">
                            <icon name="ni ni-settings-gear-65" class="mb-5" size="lg" type="success" shadow
                                  rounded></icon>
                            <h3>Bootstrap</h3>
                            <p>Here is the bootstrap of build a dApp on CKB</p>
                            <ul class="list-unstyled mt-5">
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-bold-down"></badge>
                                        <h6 class="mb-0">Step1: </h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-bold-down"></badge>
                                        <h6 class="mb-0">Step2:</h6>
                                    </div>
                                </li>
                                <li class="py-2">
                                    <div class="d-flex align-items-center">
                                        <badge type="success" circle class="mr-3" icon="ni ni-bold-down"></badge>
                                        <h6 class="mb-0">Step3:</h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section bg-secondary">
            <div class="container">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6">
                        <div class="card bg-default shadow border-0">
                            <img v-lazy="'img/theme/img-2-1200x1000.jpg'" class="card-img-top">
                            <blockquote class="card-blockquote">
                                <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95"
                                     class="svg-bg">
                                    <polygon points="0,52 583,95 0,95" class="fill-default"></polygon>
                                    <polygon points="0,42 583,95 683,0 0,95" opacity=".2" class="fill-default"></polygon>
                                </svg>
                                <h4 class="display-3 font-weight-bold text-white">Design Philosophy</h4>
                                <p class="lead text-italic text-white">On-chain verify, off-chain calculate <br> PoW, UTXO <br> Layer </p>
                            </blockquote>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="pl-md-5">
                            <icon name="ni ni-world" class="mb-5" size="lg" type="warning" shadow rounded></icon>

                            <h3>Awesome Features</h3>
                            <p class="lead">Custom encryption algorithm</p>
                            <p class="lead">Use any kind of programming language that can be compiled into RISC-V.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-1 bg-gradient-warning shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container py-0">
                <div class="row row-grid align-items-center">
                    <div class="col-md-6 order-lg-2 ml-lg-auto">
                        <div class="position-relative pl-md-5">
                            <img src="img/ill/ill-2.svg" class="img-center img-fluid">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="d-flex px-3">
                            <div>
                                <icon name="ni ni-settings" size="lg" class="bg-gradient-white" color="primary" shadow
                                      rounded></icon>
                            </div>
                            <div class="pl-4">
                                <h4 class="display-3 text-white">Useful Materials</h4>
                                <p class="text-white">We have prepared some RFCs and blogs for you, they may not help you to create your product quickly, but when you have troubles in programming, you can come over and see if there's something you need here! </p>
                            </div>
                        </div>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-satisfied" gradient="success" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-success">Nervos RFCs</h5>
                                    <ul>
                                        <li><a href="https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0009-vm-syscalls/0009-vm-syscalls.md" target="_blank">VM Syscalls</a></li>
                                        <li><a href="https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0019-data-structures/0019-data-structures.md" target="_blank">Data Structures</a></li>
                                        <li><a href="https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0021-ckb-address-format/0021-ckb-address-format.md" target="_blank">CKB Address Format</a></li>
                                        <li><a href="https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0022-transaction-structure/0022-transaction-structure.md" target="_blank">Transaction Structure</a></li>
                                        <li><a href="https://github.com/nervosnetwork/rfcs/blob/master/rfcs/0024-ckb-system-script-list/0024-ckb-system-script-list.md" target="_blank">CKB System Scripts</a></li>
                                        <li><a href="https://talk.nervos.org/t/rfc-simple-udt-draft-spec/4333" target="_blank">Simple UDT Draft Spec</a></li>
                                    </ul>
                                    <a href="https://github.com/nervosnetwork/rfcs" class="text-success" target="_blank">Learn more</a>
                                </div>
                            </div>
                        </card>
                        <card shadow class="shadow-lg--hover mt-5">
                            <div class="d-flex px-3">
                                <div>
                                    <icon name="ni ni-active-40" gradient="warning" color="white" shadow
                                          rounded></icon>
                                </div>
                                <div class="pl-4">
                                    <h5 class="title text-warning">Blogs</h5>
                                    <ul>
                                        <li><a href="https://medium.com/nervosnetwork/https-medium-com-nervosnetwork-cell-model-7323fca57571" target="_blank">Cell Model</a></li>
                                        <li><a href="https://xuejie.space/2019_07_05_introduction_to_ckb_script_programming_validation_model/" target="_blank">Introduction to CKB Script Programming 1: Validation Model</a></li>
                                        <li><a href="https://xuejie.space/2019_07_13_introduction_to_ckb_script_programming_script_basics/" target="_blank">Introduction to CKB Script Programming 2: Script Basics</a></li>
                                        <li><a href="https://talk.nervos.org/t/a-generic-payment-channel-construction-and-its-composability/4697" target="_blank">Generic Payment Channel</a></li>
                                        <li><a href="https://talk.nervos.org/t/ckb-version-control-and-blockchain-evolution/4819" target="_blank">CKB, Version Control and Blockchain Evolution</a></li>
                                    </ul>
                                    <a href="https://docs.ckb.dev/blog" class="text-warning">Learn more</a>
                                </div>
                            </div>
                        </card>
                    </div>
                </div>
            </div>
        </section>
        <section class="section section-shaped my-0 overflow-hidden">
            <div class="shape shape-style-3 shape-skew">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="container pt-lg pb-100">
                <div class="row text-center justify-content-center">
                    <div class="col-lg-10">
                        <h2 class="display-3">Let's build something amazing on CKB</h2>
                        <p class="lead">Here is some great ideas</p>
                    </div>
                </div>
                <div class="row row-grid mt-5">
                    <div class="col-lg-4">
                        <icon name="ni ni-settings" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="mt-3">Open Tx</h5>
                        <p class="mt-3">open tx</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-ruler-pencil" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="mt-3">NFT</h5>
                        <p class="mt-3">NFT</p>
                    </div>
                    <div class="col-lg-4">
                        <icon name="ni ni-atom" size="lg" gradient="white" shadow round color="primary"></icon>
                        <h5 class="mt-3">DeFi</h5>
                        <p class="mt-3">DeFi</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
