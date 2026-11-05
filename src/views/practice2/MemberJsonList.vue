<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        json-list
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-row v-for="(member, index) in memberList" :key="index">
                                <v-col cols="5">
                                    <v-text-field label="이름" type="text" v-model="member.name" />
                                </v-col>
                                <v-col cols="5">
                                    <v-text-field label="이메일" type="text" v-model="member.email" />
                                </v-col>
                                <v-col cols="2">
                                    <v-btn icon="mdi-delete" variant="text" @click="removeMember(index)" />
                                </v-col>
                            </v-row>
                            <v-btn class="mb-2" block @click="addMember()">회원 추가</v-btn>
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
            memberList: [
                {name: null, email: null},
            ],
        }
    },
    methods:{
        addMember(){
            this.memberList.push({name: null, email: null});
        },
        removeMember(index){
            this.memberList.splice(index, 1);
        },
        async postData(){
            // 배열을 그대로 보내면 [{"name":..., "email":...}, ...] 형식의 json으로 전송
            await axios.post("http://localhost:8080/member/json-list", this.memberList);
        }
    }
}
</script>
