type VideoProps = {
    id: String
}

export const YoutubeVideo : React.FC<VideoProps> = ({id}) => {
    return (
        <iframe className="mb-5" width="500" height="315" src={"https://www.youtube.com/embed/" + id} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    )
}