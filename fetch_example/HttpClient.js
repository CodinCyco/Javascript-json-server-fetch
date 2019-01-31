class HttpClient {



    getBooks(url){

        return new Promise((resolve ,reject)=>{
            fetch(url)
                .then(res => res.json())
                .then(data => resolve(data))
                .catch(err => reject(err));
        });

    }

    addBook(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:'post',
                headers:{'content-type':'application/json'},
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(res => resolve(res))
                .catch(err => reject(err));
        });
    }



}