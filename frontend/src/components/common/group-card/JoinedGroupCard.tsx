import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import OrangeButton from '../OrangeButton/OrangeButton'
import { LiaCrownSolid } from "react-icons/lia";

import { Link } from 'react-router-dom'
import { GroupProvider, useGroups } from '@/context/groupContext'
import { useJoinedGroups } from '@/context/JoinedGroupContext';




export default function JoinedGroupCard() {
  const { groups } = useJoinedGroups();
  const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
  console.log(BASE_URL);
  
  return (

      <div className="w-full flex justify-center items-center">
      <div className="w-full p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          groups.map((group: any, index: number) => {
            const imageUrl = group.image 
              ? `${BASE_URL}${group.image}` 
              : "https://d22r54gnmuhwmk.cloudfront.net/rendr-fe/img/default-organization-logo-6aecc771.gif";
            
            return (
              <Card key={index} className="shadow-md w-full h-full flex flex-col justify-between items-center">
                <CardHeader className="p-0 w-full">
                  <img
                    src={imageUrl}
                    alt="card1 img"
                    className="w-full h-[280px] object-cover"
                  />
                </CardHeader>

                <CardContent className="p-4 flex-1">
                  <h3 className="font-bold mb-2">
                    <Link to={`/group-details/${group._id}`}>
                      {group.description}
                    </Link>
                  </h3>
                  <p className="text-gray-500">
                    {group.members.length === 0 ? "No Members yet" : group.members.length}
                  </p>
                </CardContent>

                <CardFooter className="mt-auto p-2 flex justify-center">
                  <OrangeButton title="Join Group" icon={<LiaCrownSolid />} />
                </CardFooter>
              </Card>
            );
          })
        }
      </div>
    </div>


  );
}
