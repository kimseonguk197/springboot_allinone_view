<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        json-nested
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="이름" type="text" v-model="name" />
                            <v-text-field label="이메일" type="text" v-model="email" />
                            <p class="mb-2">성적정보</p>
                            <v-row v-for="(score, index) in scores" :key="index">
                                <v-col>
                                    <v-text-field label="수업명" type="text" v-model="score.subject" />
                                </v-col>
                                <v-col>
                                    <v-text-field label="점수" type="text" v-model="score.point" />
                                </v-col>
                            </v-row>
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
            scores: [
                {subject: null, point: null},
                {subject: null, point: null},
            ],
        }
    },
    methods:{
        async postData(){
            const serverData = {name: this.name, email: this.email, scores: this.scores};
            await axios.post("http://localhost:8080/member/json-nested", serverData);
        }
    }
}
</script>
