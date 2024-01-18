import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer K8uoJ-tHQzYchpz3w_BexJoXhnTLdkBbMkSSjUvzINUtBPu8RjRjmssPx00I6QKtcNqdac4ifV03VvxylKd0KpdagytsXgrkp-6nTHPv0i-bjtueEEkCk_Xnb3YVX3Yx'
    }

});