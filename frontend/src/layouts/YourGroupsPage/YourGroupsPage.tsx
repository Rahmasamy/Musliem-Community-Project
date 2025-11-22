import JoinedGroupCard from '@/components/common/group-card/JoinedGroupCard'
import { JoinedGroupProvider } from '@/context/JoinedGroupContext'


export default function YourGroupsPage() {
  return (
    <>
     <div className="flex justify-between items-center mb-8">

               

            </div>
             <section>
                               <div className="w-full flex items-center justify-center">
                                   <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                       Joined Groups
                                   </h2>
                               </div>
                              <JoinedGroupProvider>
                                   <JoinedGroupCard />
                              </JoinedGroupProvider>
                                 
 
                                 
                            
                           </section>
    </>
     
  )
}
