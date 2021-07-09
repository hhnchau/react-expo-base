import axios from 'axios';

export  function get() {
    axios.get('http://8.12.17.73/link/get',
    {
        params:{
            videoId:"O81_4VAson4"
        },
        timeout:10000,
        headers:{secret:'@Aa'}
    })
    .then(function (response) {
        // handle success
        console.log("RES:-----",response.data);
    })
    .catch(function (error) {
        // handle error
        console.log("ERROR:-------",err);
    })
    .then(function () {
        // always executed
        console.log('``````OK````````');
    });
}

export  function post() {
    axios.post('http://8.12.17.73/user/signin',
    {
        "_id":"20123704837",
        "device":"admin"
    },
    {
        timeout:10000,
        headers:{
            'secret':'@Aa',
            'Content-Type':'application/json'
        }
    })
    .then(function (response) {
        // handle success
        console.log("RES:-----",response.data);
    })
    .catch(function (error) {
        // handle error
        console.log("ERROR:-------",err);
    })
    .then(function () {
        // always executed
        console.log('``````OK````````');
    });
}

export  function update() {
    axios.update('http://8.12.17.73/user/signin',
    {
        "_id":"20123704837",
        "device":"admin"
    },
    {
        timeout:10000,
        headers:{
            'secret':'@Aa',
            'Content-Type':'application/json'
        }
    })
    .then(function (response) {
        // handle success
        console.log("RES:-----",response.data);
    })
    .catch(function (error) {
        // handle error
        console.log("ERROR:-------",err);
    })
    .then(function () {
        // always executed
        console.log('``````OK````````');
    });
}

export  function deletez() {
    axios.delete('http://8.12.17.73/user/signin',
    {
        "_id":"20123704837",
        "device":"admin"
    },
    {
        timeout:10000,
        headers:{
            'secret':'@Aa',
            'Content-Type':'application/json'
        }
    })
    .then(function (response) {
        // handle success
        console.log("RES:-----",response.data);
    })
    .catch(function (error) {
        // handle error
        console.log("ERROR:-------",err);
    })
    .then(function () {
        // always executed
        console.log('``````OK````````');
    });
}


