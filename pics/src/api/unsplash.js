import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
                Authorization: 'Client-ID QtfAJTAYXPBfb9qruvbKTGGHif5g0JkxYCTXAgXHIPc'
    }
});