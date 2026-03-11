import { IoAdd } from "react-icons/io5";

const RequestsHeader = ({setOpenModal}) => {
    return (
        <div className="mb-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">

                <h1 className="text-2xl md:text-3xl font-bold">
                    Demandes clients
                </h1>

                <button onClick={() => setOpenModal(true)} className="hidden md:flex items-center justify-center gap-2 bg-[#1f1f1f] hover:bg-[#333333] text-white rounded-lg px-4 py-3 w-full md:w-auto">
                    <span className="text-xl">
                        <IoAdd />
                    </span>
                    Nouvelle demande
                </button>

            </div>
        </div>
    )
}

export default RequestsHeader