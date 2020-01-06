<template>
    <div>
        <div>
            <h2>New Data</h2>
            <div>
                <form action="">
                    <input type="text" name='first_name' v-model='form.setUser.first_name'> 
                    <input type="text" name='last_name' v-model='form.setUser.last_name'> 
                    <input type="text" name='email' v-model='form.setUser.email'> 
                    <input type="text" name='gender' v-model='form.setUser.gender'> 
                    <input type="submit" v-on:click='setUser' value='Add'>
                </form>
            </div>
        </div>
        <div>
            <h2>User View</h2>
            <ul>
                <li v-for="(user, key) in userData" v-bind:key="key">
                    {{ user.first_name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        userData: null,
        form: {
            setUser: {
                first_name: null,
                last_name: null,
                email: null,
                gender: null
            }
        }
    }),

    methods: {
        getUser() {
            let header = {
                'Authorization' : 'Bearer xsNalOIbtyrQ4ynb-CTVWa0lwvFrVWaYhyPO'
            }

            axios.get('https://gorest.co.in/public-api/users', {headers: header})
                .then(res => {
                    this.userData = res.data.result
                })
        },

        setUser() {

        }
    },

    mounted() {
        this.getUser();
    }
}
</script>