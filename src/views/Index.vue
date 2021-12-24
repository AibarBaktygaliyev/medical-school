<template>
    <div class="MainContainer">
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SHA256 from 'crypto-js/sha256'
import Base64 from 'crypto-js/enc-base64'

export default Vue.extend({
    name: 'MainContainer',
    mounted: function() {
        // console.log(AES('password'))
        const result = Base64.stringify(SHA256('password'))
        console.log(result)
        console.log(result === 'XohImNooBHFR0OVvjcYpJ3NgPQ1qq73WKhHvch0VQtg=')

    }
})
</script>

<style lang="scss">
/* width */
::-webkit-scrollbar {
    width: 8px;
    height: 8px;
}
/* Track */
::-webkit-scrollbar-track {
    border-radius: 4px;
}
/* Handle */
::-webkit-scrollbar-thumb {
    background: #ABAEA3;
    border-radius: 4px;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #ABAEB3;
    cursor: pointer;
}
.MainContainer {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    font-family: Roboto;
}
</style>