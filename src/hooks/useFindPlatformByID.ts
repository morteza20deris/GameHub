import usePlatforms from "./usePlatforms"

const useFindPlatformByID = (platformID?:number) => {
    const { data } = usePlatforms()
    return data?.results.find((platform)=>platform.id===platformID)
}

export default useFindPlatformByID