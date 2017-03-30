const key = 'PolypusServerURL';

const config = {
    getUrl: () => {
        let url = localStorage.getItem(key);
        if(!url){
            url = 'http://localhost:4000/api';
            localStorage.setItem(key, url);
        }
        return url;
    },
    updateUrl: (url)=>{
        localStorage.setItem(key, url);
        setTimeout(function(){ // hack for reload
            window.location.reload();
        });
    }
}

export default config;