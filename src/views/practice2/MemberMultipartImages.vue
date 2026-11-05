<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        multipart-formdata (이미지 여러개)
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field label="이름" type="text" v-model="name" />
                            <v-text-field label="이메일" type="text" v-model="email" />
                            <v-file-input label="프로필이미지" accept="image/*" multiple v-model="profileImages" />
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
            profileImages: [],
        }
    },
    methods:{
        async postData(){
            const serverData = new FormData();
            serverData.append('name', this.name);
            serverData.append('email', this.email);
            for(let i=0; i<this.profileImages.length; i++){
                serverData.append('profileImages', this.profileImages[i]);
            }
            await axios.post("http://localhost:8080/member1/multipart-formdata-images", serverData);
        }
    }
}
</script>
