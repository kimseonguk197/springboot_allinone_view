<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        url-encoded
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="이름" type="text" v-model="name" />
                            <v-text-field label="이메일" type="text" v-model="email" />
                            <v-btn color="secondary" block @click="postData()">제출</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            name: null,
            email: null,
        }
    },
    methods:{
        async postData(){
            // URLSearchParams로 전송하면 axios가 application/x-www-form-urlencoded 형식으로 전송
            const serverData = new URLSearchParams();
            serverData.append('name', this.name);
            serverData.append('email', this.email);
            await axios.post("http://localhost:8080/member/url-encoded", serverData);
        }
    }
}
</script>
