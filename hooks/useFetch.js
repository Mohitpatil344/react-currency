import { useEffect,useState } from "react";

//made diff file formt for hooks
export  function usePostTitle() {
const [post, setPost] = useState({});

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const json = await response.json();
  setPost(json);    
}

useEffect(() => {
  getPosts();
}, []);

return post.title;
}

//more better version of above part of code
export function useFetch(url){
    const [finalData,setFinalData] = useState([]); 
    const [isLoading,setIsLoading] = useState(true);

    async function getDetails(){
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setIsLoading(false);
    }

    useEffect(()=>{
        getDetails();
    },[url])
    
    
    
    return{
        finalData
    }
}