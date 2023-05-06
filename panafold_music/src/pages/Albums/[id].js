import { useRouter } from 'next/router';
export function getAllAlbumIds(albums) {
  return albums.map(album => {
    return {
      params: {
        id: album.replace(/\.md$/, '')
      }
    }
  })
}
export async function getStaticPaths() {
  const res = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
  const albums = await res.json()
  const paths = getAllAlbumIds(albums)
  //console.log(paths)
    return {
      paths: paths,
      fallback: false
    };
  } 
export async function getStaticProps({ paths }) {
  const res = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
  const albums = await res.json()
  const album= albums.filter(album => album.id.attributes.id === paths.id) 
    return {
      props: {
        album,
      }, // will be passed to the page component as props
    };
  }

export default function Album({ albumID }) {

} 