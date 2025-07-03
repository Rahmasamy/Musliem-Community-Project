import { RightAuthImg } from "@/components/interfaces/RightAuthImg";

const RightAuthImgComponent:React.FC<RightAuthImg> = ({src,alt,className=''}) => {

    return (
        <div className="RightAuthBigContainer w-full h-full flex justify-center items-center">
            <div className="RightAuthContainer h-full p-8 flex flex-col overflow-hidden justify-center items-center">
                  <img src={src} alt={alt}  />
            </div>
        </div>
    )
}
export default RightAuthImgComponent;