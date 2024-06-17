

let baseUrl = 'https://664f8270ec9b4a4a602f0991.mockapi.io/api/Houses/Houses';

export default class HouseServices {

    constructor(url){
        this.url = url || baseUrl;
    }

    async allHouses() {

        let url = this.url;
        let response = await fetch(url);
        let json = await response.json()
        return json;
        
    }

     async deleteHouse(id) {

        try{
        const res = await fetch(`${this.url}/${id}`, {
        method: 'DELETE',
        })

        if(res.ok){
            console.log('success')
        } else {
            console.log('failed')
        }
    
        } catch (error) {
            console.error('error', error)
        }
    }


}