<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        multipart-formdata (이미지 1개)
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
            // vuetify 버전에 따라 v-file-input의 v-model 값이 File 또는 File[]일 수 있음
            const file = Array.isArray(this.profileImage) ? this.profileImage[0] : this.profileImage;
            const serverData = new FormData();
            serverData.append('name', this.name);
            serverData.append('email', this.email);
            serverData.append('profileImage', file);
            await axios.post("http://localhost:8080/member/multipart-formdata", serverData);
        }
    }
}
</script>
