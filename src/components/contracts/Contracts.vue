<template>
    <div class="contracts-wrapper flex flex-col w-full relative">
        <h1 class="title w-3/5 text-lakrids font-semibold">Kontrakter</h1>

        <div class="flex">
            <div v-for="status in statuses" :key="status" class="flex w-full justify-between">
                <div :class="status" class="card-container">
                    <ContractsCard :contracts="contracts" :key="i" v-for="(contracts, i) in statusOfCard(status)"></ContractsCard>
                </div>
            </div>
        </div>

        <div class="addButtonContainer flex justify-end">
            <button class="addButton flex text-white font-semibold items-center justify-center">
                <svg width="29px" height="29px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path  stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </button>
        </div>     
      
    </div>
</template>

<script>
import ContractsCard from './ContractsCard'

export default {
    components: { ContractsCard },
    name: 'Contracts',
    props: ['contracts'],
    data() {
        return {
            colors: {
               grey: '#D9D9D9',
               yellow: '#F7EFB1',
               green: '#D7F5DD',
               red: '#FCE8E8'
           },
           ContractsCardData: [
                {
                    id: 1,
                    status: "KLADDE",
                    title: "Top Construction A/S",
                    description: "Reparation af vinduesramme.",
                    firstname: "Anders",
                    lastname: "Andersen",
                    mail: "anders@topconstruction.dk",
                    phone: "31 10 10 10",
                    priceTitle: "FAST PRIS",
                    priceTag: "56,000 DKK"
            },
            {
                    id: 2,
                    status: "SENDT",
                    title: "Electric ApS",
                    description: "Installation af stikkontakt til køkkenmaskiner.",
                    firstname: "Lars",
                    lastname: "Larsen",
                    mail: "lars@electric.dk",
                    phone: "81 81 81 81",
                    priceTitle: "FAST PRIS",
                    priceTag:"12,000 DKK"
            },
            {
                    id: 3,
                    status: "SENDT",
                    title: "Electric ApS",
                    description: "Installation af stikkontakt til køkkenmaskiner.",
                    firstname: "Lars",
                    lastname: "Larsen",
                    mail: "lars@electric.dk",
                    phone: "81 81 81 81",
                    priceTitle: "FAST PRIS",
                    priceTag:"12,000 DKK"
            },
                {
                    id: 4,
                    status: "ACCEPTERET",
                    title: "VVS KING A/S",
                    description: "Installation af toilet i badeværelset.",
                    firstname: "Kim",
                    lastname: "Olesen",
                    mail: "kim@vvsking.dk",
                    phone: "12 12 12 12",
                    priceTitle: "FAST PRIS",
                    priceTag: "55,000 DKK"
            },
            {
                    id: 5,
                    status: "ANMODEDE OM REVISION",
                    title: "RENGØRING ApS",
                    description: "Rengøring efter renovering.",
                    firstname: "Laura",
                    lastname: "Nielsen",
                    mail: "laura@rengoering.dk",
                    phone: "23 23 23 23",
                    priceTitle: "OVERSLAG",
                    priceTag: "5,000 DKK"
            },
            {
                    id: 6,
                    status: "ANMODEDE OM REVISION",
                    title: "RENGØRING ApS",
                    description: "Rengøring efter renovering.",
                    firstname: "Laura",
                    lastname: "Nielsen",
                    mail: "laura@rengoering.dk",
                    phone: "23 23 23 23",
                    priceTitle: "OVERSLAG",
                    priceTag: "5,000 DKK"
            },
            {
                    id: 7,
                    status: "ANMODEDE OM REVISION",
                    title: "RENGØRING ApS",
                    description: "Rengøring efter renovering.",
                    firstname: "Laura",
                    lastname: "Nielsen",
                    mail: "laura@rengoering.dk",
                    phone: "23 23 23 23",
                    priceTitle: "OVERSLAG",
                    priceTag: "5,000 DKK"
            },
           ],
        }
    },
    computed: {
        statuses() {
        return [...new Set(this.ContractsCardData.map(c => c.status))]}
    },
    methods: {
        statusOfCard(status) {
            return this.ContractsCardData.filter(s => s.status === status)
        }
    },   
}
</script>

<style>

    body {
        margin: 0;
        text-decoration: none;
        outline: none;
    }

    .card-container {
        width: 90%;
    }

    h1 {
        margin-left: 5%;
    }

    .contracts-wrapper {
        margin: 0 3% 0 4%;
    }

   .title {
       display: block;
       margin: 5% 0 0 0;
   }

    .addButtonContainer {
        text-decoration: none;
        outline: none;
        margin-top: 3%;
    }

   .addButton {
        width: 80px;
        height: 60px;
        background-color: #30B34A;
        border-radius: 30px;
        box-shadow: 0px 10px 20px #30b34a2f;
   }
   button:focus {
        text-decoration: none;
        outline: none;
   }
</style>