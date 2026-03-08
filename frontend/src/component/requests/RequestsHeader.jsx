import { IoAdd } from "react-icons/io5";

const RequestsHeader = () => {
    return (
        <div className="mb-5">
            <div className="flex justify-between items-center">
                <h1 className='text-3xl font-bold'>Demandes clients</h1>
                <button class="flex items-center gap-2 hover:cursor-pointer bg-[#1f1f1f] hover:bg-[#333333] text-white rounded-lg px-4 py-2">
                    <span className="text-white text-xl"><IoAdd /></span>
                    Nouvelle demande
                </button>
            </div>
        </div>
    )
}

export default RequestsHeader