<template>
    <v-container>
        <v-card>
            <v-card-title class="text-center text-h5">
                /member/json 테스트
            </v-card-title>
            <v-card-text class="text-center">
                <div>이름 : {{ member.name }}</div>
                <div>이메일 : {{ member.email }}</div>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
import axios from 'axios';

export default{
    data(){
        return{
            member: {},
        }
    },
    async created(){
        const result = await axios.get("http://localhost:8080/member/json");
        this.member = result.data;
    }
}
</script>
