import { RightAuthImg } from "@/components/interfaces/RightAuthImg";

const RightAuthImgComponent: React.FC<RightAuthImg> = ({ src, alt, className = '' }) => {

    return (


        <img src={src} alt={alt} className={className} />


    )
}
export default RightAuthImgComponent;