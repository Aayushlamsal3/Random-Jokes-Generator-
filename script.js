<script>

        let jokes=document.querySelector(".joke")

        let btn=document.querySelector(".button")

        let apiurl=`https://api.api-ninjas.com/v1/dadjokes?limit=1'`

        let apikey=`{Your API Key}`
    
        async function go(){
            let response= await fetch(apiurl,{
                headers: {'X-Api-Key': apikey}
            })
            let result=await response.json()
            jokes.textContent=  result[0].joke
        }

        document.addEventListener("DOMContentLoaded",go)

        btn.addEventListener("click",go)


    </script>
