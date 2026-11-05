<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        json-file
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="이름" type="text" v-model="name" />
                            <v-text-field label="이메일" type="text" v-model="email" />
                            <v-file-input label="프로필이미지" accept="image/*" v-model="profileImage" />
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
            profileImage: null,
        }
    },
    methods:{
        async postData(){
            const memberJson = JSON.stringify({name: this.name, email: this.email});
            const file = Array.isArray(this.profileImage) ? this.profileImage[0] : this.profileImage;
            const serverData = new FormData();
            // js에서 Blob함수는 데이터형을 지정/변환할 때 사용
            serverData.append('member1', new Blob([memberJson], {type:"application/json"}));
            serverData.append('profileImage', file);
            await axios.post("http://localhost:8080/member/json-file", serverData);
        }
    }
}
</script>
