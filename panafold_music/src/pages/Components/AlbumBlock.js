export default function AlbumBlock({album}){

return (
    <div className="">
    <p key={album.id.attributes.id}>{album.title.label}</p>
    <img src={album["im:image"][2].label} width={100} height={100}></img> 
    </div>
)

}

