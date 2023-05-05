export default function AlbumBlock({album}){

return (
    <div className="mb-10 alignSelf h-130 w-4/12 bg-white border-gray-400 border-2 drop-shadow-sm rounded-lg ">
    <p key={album.id.attributes.id}>{album.title.label}</p>
    <img src={album["im:image"][2].label} width={100} height={100}></img> 
    </div>
)

}

