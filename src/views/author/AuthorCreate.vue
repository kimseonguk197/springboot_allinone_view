<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="6">
                <v-card>
                    <v-card-title class="text-h5 text-center">
                        회원가입
                    </v-card-title>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                label="이름"
                                type="text"
                                v-model="name"
                            />
                            <v-text-field
                                label="이메일"
                                type="email"
                                v-model="email"
                            />
                            <v-text-field
                                label="비밀번호"
                                type="password"
                                v-model="password"
                            />
                            <v-text-field
                                label="도시"
                                type="text"
                                v-model="city"
                            />
                            <v-text-field
                                label="도로명 주소"
                                type="text"
                                v-model="street"
                            />
                            <v-text-field
                                label="우편번호"
                                type="text"
                                v-model="zipCode"
                            />
                            <v-row>
                                <v-col>
                                    <v-btn color="secondary" block @click="authorCreate()">
                                        등록
                                    </v-btn>
                                </v-col>
                            </v-row>
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
            password: null,
            city: null,
            street: null,
            zipCode: null,
        }
    },
    methods:{
        async authorCreate(){
            try{
                const data = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    address: {
                        city: this.city,
                        street: this.street,
                        zipCode: this.zipCode
                    }
                };

                const result = await axios.post(
                    `${process.env.VUE_APP_API_BASE_URL}/author/create`,data
                );

                console.log(result.data);
                this.$router.push("/");
            }catch(e){
                console.log(e);
                alert(e.response.data.error_message);
            }
        }
    }
}
</script>