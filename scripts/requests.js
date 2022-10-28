const baseUrl = 'https://m2-api-living.herokuapp.com'


async function getPosts(page) {

   
        try {
            const response = await fetch(baseUrl + `/news?page=${page}`, {
                method: "GET",
                headers: {
                    "content-type": "application/json",
                },
            })
            if (!response.ok) {
                throw new Error("o status não está dentro de valores válidos")
            }

            const data = await response.json()
            return data
            

        } catch (err) {
            console.error(err)
            return false
        }
    
}


export{
    getPosts
}