<template>
    <div class="flex justify-end">
            <button class="
            card-button flex text-sm text-white
            font-semibold items-center
            justify-center">Send Kontrakt</button>
    </div>
</template>

<script>
export default {
    name: 'ContractsButton',
    data() {
        return {

        }
    },
}
</script>

<style>
 .card-button {
     width: 70%;
     height: 38px;
     margin-top: 15px;
     background-color: #30B34A;
     box-shadow: 0px 10px 20px #30b34a2f;
     border-radius: 13px;
 }

 button {
     text-decoration: none;
        outline: none;
 }
</style>