<template>
    <v-app-bar>
        <v-container>
            <v-row>
                <v-col class="text-center">
                    <v-btn :to="'/'" >게시판</v-btn>
                </v-col>
                <v-col class="d-flex justify-end">
                    <v-btn :to="'/author/list'">회원목록</v-btn>
                    <v-btn v-if="!isLogined" :to="'/author/create'">회원가입</v-btn>
                    <v-btn v-if="!isLogined" :to="'/author/login'">로그인</v-btn>
                    <v-btn v-if="isLogined" @click="doLogout()">로그아웃</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>
<script>
import { jwtDecode } from 'jwt-decode';

    export default{
        data(){
            return{
                userRole: null,
                isLogined: false,
            }
        },
        created(){
            const accessToken = localStorage.getItem("accessToken");
            if(accessToken){
                const payload = jwtDecode(accessToken);
                this.userRole = payload.role;
                this.isLogined = true;
            }
        },
        methods:{
            doLogout(){
                localStorage.clear();
                this.isLogined = false;
                this.userRole = null;
                this.$router.push("/");
            }
        }
    }
</script>