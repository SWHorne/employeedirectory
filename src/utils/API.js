import Axios from 'axios';

export default {
    getUsers: async () => (await Axios.get("https://randomuser.me/api/?results=20&nat=us")).data
}