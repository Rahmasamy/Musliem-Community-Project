import Nodata from '@/assets/imgs/no-data.jpg'

export default function NoDataFound({
    message = "No data found"
} : {message?:string}) {
  return (
   <div className="w-full flex justify-center items-center py-10 min-h-70 flex-col" >
        <div className="text-center text-gray-600 text-lg font-semibold bg-gray-100 px-6 py-4 rounded-xl shadow">
         {message}
        </div>
        <div>
        <img  src={Nodata} alt="No data found" className="w-96 h-96 object-cover"/>
        </div>
      </div>
  )
}
