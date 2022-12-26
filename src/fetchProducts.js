
const getProducts = async (url) => {
    const response = await fetch(url).catch(err => console.log(err))
    if(response){
        return await response.json()
    }

    return response
}

export default getProducts