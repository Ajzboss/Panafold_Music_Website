export default function AlbumBlock({album}){

return (
    <div className=" grow mb-10 alignSelf h-130 min-[880px]:w-5/12 w-11/12 bg-white border-gray-400 border-2 drop-shadow-lg rounded-lg p-4 flex ml-10">
    <img src={album["im:image"][2].label} width={100} height={100} className="rounded-lg "></img> 
    <h1 className="font-bold ml-5 truncate" key={album.id.attributes.id}>{album["im:name"].label}
        <p className="ml-5 font-light" key={album.id.attributes.id}>{album["im:artist"].label}</p>
        <p className="ml-5 font-light" key={album.id.attributes.id}>{album["im:price"].label}</p>
        <p className="ml-5 font-extralight" key={album.id.attributes.id}>{album["rights"].label}</p>
    </h1 >


    </div>
)

}

