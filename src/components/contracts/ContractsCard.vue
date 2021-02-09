<template>
    
        <div class="card-wrapper w-full relative"> <!-- wrapper -->
            <div
            :class="cardTypeCSS"
            class="
            status-bar flex absolute
            -top-3 right-0 text-xs
            font-bold text-center
            justify-center items-center"
            >
                {{ contracts.status }}
            </div>

            <div class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="12.692" height="14.004" viewBox="0 0 12.692 14.004">
                    <path id="paperclip-regular" d="M25.19,12.814a4.059,4.059,0,0,1,0-5.742L31.345.916a3.132,3.132,0,1,1,4.429,4.43l-5.182,5.183a2.2,2.2,0,1,1-3.116-3.117l4.389-4.39a.328.328,0,0,1,.464,0l.464.464a.328.328,0,0,1,0,.464L28.4,8.34a.891.891,0,1,0,1.26,1.26l5.182-5.183a1.819,1.819,0,1,0-2.572-2.573L26.118,8a2.748,2.748,0,1,0,3.888,3.885Q32.687,9.2,35.368,6.521a.327.327,0,0,1,.461,0l.464.464a.328.328,0,0,1,0,.464q-2.672,2.675-5.353,5.36A4.064,4.064,0,0,1,25.19,12.814Z" transform="translate(-24 0)" fill="#4a4a4a"/>
                </svg>
                <h3 class="text-lg w-full font-semibold ml-5">{{ contracts.title }}</h3>
            </div>

            <p class="card-desc w-3/4 text-sm">{{ contracts.description }}</p>
            
            <div class="w-full inline-flex justify-between">
               
                    <ul class="flex w-1/2 flex-col m-0">
                        <li class="text-sm font-semibold">{{ contracts.firstname + ' ' + contracts.lastname }}</li>
                        <li cl ass="text-sm">{{ contracts.mail }}</li>
                        <li class="text-sm">{{ contracts.phone }}</li>
                    </ul>

                    <div class="flex w-full flex-wrap text-right justify-end m-0">
                        <p class="price-title text-xs font-bold ">{{ contracts.priceTitle }}</p>
                        <p class="text-lg">{{ contracts.priceTag }}</p>
                    </div>
             
             </div>

            <div v-if="contracts.status === 'KLADDE'">
            <ContractsButton/>
            </div>

        </div>
  
</template>

<script>
import ContractsButton from './ContractsButton'

export default {
    components: {ContractsButton},
    name: 'ContractsCard',
    props: ['contracts'],
    data() {
        return {
            
        }
    },
    methods: {
        log() {
            console.log(this.contracts);
        }
    },
    computed: {
        cardTypeCSS() {
     
            const status = this.contracts.status;
             return status === 'KLADDE' ? 'status-grey'
            : status === 'ACCEPTERET' ? 'status-green' 
            : status === "SENDT" ? 'status-yellow' 
            : status === "ANMODEDE OM REVISION" ? 'status-red' 
            : null
            
        },
       
    }
}
</script>

<style>
    .status-bar {
        min-width: 25%;
        background-color: #D9D9D9;
        border-radius: 13px;
        padding: 2% 5%;
    }
    .status-grey {
        background-color: #D9D9D9;
    }
    .status-yellow {
        background-color: #F7EFB1;
        color: #D6A500;
    }
    .status-green {
        background-color: #D7F5DD;
        color: #30B34A;
    }
    .status-red {
        background-color: #FCE8E8;
        color: #FD8282;
    }

    .card-wrapper {
        background-color: #F7F7F7;
        border-radius: 15px 0 15px 15px;
        padding: 20px 25px 15px 20px;
        margin-top: 15%;
        margin-right: 5%;
    }
    .card-desc {
        margin: 13px 0 15px 0;
    }

    .price-title {
        color: #30B34A;
    }

    .card-button:active, .card-button:focus {
        outline: none;
    }
</style>