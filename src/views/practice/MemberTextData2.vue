<template>
    <v-container>
        <v-card>
            <v-card-title class="text-center text-h5">
                /member/text-data2 테스트
            </v-card-title>
            <v-card-text class="text-center">
                받은 데이터 : {{ textData }}
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
import axios from 'axios';

export default{
    data(){
        return{
            textData: "",
        }
    },
    async created(){
        const result = await axios.get("http://localhost:8080/member/text-data2");
        this.textData = result.data;
    }
}
</script>
