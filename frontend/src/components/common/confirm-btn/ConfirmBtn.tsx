

export default function ConfirmBtn( { onClick } : { onClick?: () => void}) {
  return (
    <> <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600"
     onClick={onClick}
    >
            + Create 
         
         
          </button>
          
          </>
  )
}
