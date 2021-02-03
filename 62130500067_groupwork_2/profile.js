    const app = {
        data() {
            return {
                image: 'images/profile.png' ,
                firstname: 'Pitchanon Wongkhamlue' ,
                career: 'Student' ,
            }
        }
    }

    var mountedApp = Vue.createApp(app).mount('#app')