import Platforms from "../Data/Platforms"
interface Platforms{
    id: number
    name: string
    slug:string
}
const usePlatforms = () => {
  return ({data:Platforms,isLoading:false,error:null})
}

export default usePlatforms