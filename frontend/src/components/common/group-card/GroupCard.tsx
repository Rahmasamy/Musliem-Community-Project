import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import group1 from '@/assets/imgs/group1.png'
import group2 from '@/assets/imgs/group2.png'
import group3 from '@/assets/imgs/group3.png'
import OrangeButton from '../OrangeButton/OrangeButton'
import { LiaCrownSolid } from "react-icons/lia";
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom'



export default function GroupCard() {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[90%] p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
       <Card className="shadow-md w-full h-full flex flex-col justify-between items-center">
  <CardHeader className="p-0">
    <img
      src={group1}
      alt="card1 img"
      className="w-full h-[250px] object-cover"
    />
  </CardHeader>

  <CardContent className="p-4 flex-1">
    <h3 className="font-bold mb-2">
        <Link to="/group-details">
      Muslim American Society (MAS) Lorem Ipsum Long Title Example
        </Link>
    </h3>
    <p className="text-gray-500">20+ members</p>
  </CardContent>

  <CardFooter className="mt-auto p-2" style={{ alignItems:"center",justifyContent:"center"}}>
    <OrangeButton title="Join Group" icon={<LiaCrownSolid />} />
  </CardFooter>
</Card>


        {/* Card 2 */}
        <Card className="shadow-md w-full h-full flex flex-col justify-between">
          <CardHeader className="p-0">
            <img
              src={group2}
              alt="card2 img"
              className="w-full h-[250px] object-cover"
            />
          </CardHeader>
          <CardContent className="p-4 flex-1">
            <Link to="/group-details">
            <h3 className="font-bold">Neighborhood Watch Groups</h3>
            </Link>
            <p className="text-gray-500">20+ members</p>
          </CardContent>
          <CardFooter style={{ alignItems:"center",justifyContent:"center"}}>
            <OrangeButton title="Join Group" icon={<LiaCrownSolid />} />
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card className="shadow-md w-full h-full flex flex-col justify-between">
          <CardHeader className="p-0">
            <img
              src={group3}
              alt="card3 img"
              className="w-full h-[250px] object-cover"
            />
          </CardHeader>
          <CardContent className="p-4 flex-1">
            <Link to="/group-details">
            <h3 className="font-bold">Local Book Clubs</h3>
            </Link>
            <p className="text-gray-500">20+ members</p>
          </CardContent>
          <CardFooter style={{ alignItems:"center",justifyContent:"center"}}>
            <OrangeButton title="Join Group" icon={<FaPlus />} />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
