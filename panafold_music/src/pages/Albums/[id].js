import Layout from "../Components/Layout"
import AlbumBlock from "../Components/AlbumBlock"
import AlbumProfile from "../Components/AlbumProfile"
export function getAllAlbumIds(albums) {
  return albums.map(album => {
    return {
      params: {
        id: album.id.attributes["im:id"]
      }
    }
  })
}
export async function getStaticPaths() {
  const res = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
  const albums = await res.json()
  const paths = getAllAlbumIds(albums.feed.entry)
  //console.log(paths)
    return {
      paths,
      fallback: false
    };
  } 
 export async function getStaticProps({ params }) {
  const res = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
  const albums = await res.json()
  const albumData= albums.feed.entry.filter(album => album.id.attributes["im:id"] === params.id) 
  console.log(params.id)
  console.log(albumData[0].id.attributes["im:id"])
    return {  
      props: {
        albumData,
      }, // will be passed to the page component as props
    };
  } 

export default function Album({ albumData }) {
  
  return (
    <>
    <Layout home={false}>
     <AlbumProfile album={albumData[0]}> </AlbumProfile>  
    </Layout >
    </>
    )
} 