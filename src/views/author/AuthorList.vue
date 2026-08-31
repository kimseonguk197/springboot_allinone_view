<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card>
                    <v-card-title class="text-center text-h5">
                        회원목록
                    </v-card-title>
                    <v-card-text>
                        <v-table>
                            <thead>
                                <tr>
                                    <th>ID</th><th>이름</th><th>이메일</th><th>상세보기</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="author in authorList" :key="author.id">
                                    <td>{{author.id}}</td>
                                    <td>{{author.name}}</td>
                                    <td>{{author.email}}</td>
                                </tr>
                            </tbody>
                        </v-table>
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
            authorList: [],
        }
    },
    async created(){
        try{
            const result = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/author/list`);
            this.authorList = result.data;
        }catch(e){
            console.log(e);
        }
    }
}
</script>