import { useForm } from "../hooks/useForm"

const InputForm = ({setTableC}) => {
    const [inputs, handleChange, reset] = useForm({
        walletDate2: '0x1830657d216acA8A3929CC15CECFD152B3f3eD81'
    })
    const {walletDate2} = inputs
    
    const handleSubmit2 = e => {
        e.preventDefault()
        setTableC(walletDate2)
        reset()
    }
  return (
    <div className="p-4 max-w-sm mt-4 bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
        <form className='space-y-6' onSubmit={handleSubmit2}>
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Wallet Address</h5>
            <div className="mb-6">
                <label htmlFor='walletDate2' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wallet Address</label>
                <input type="text" name="walletDate2" id="walletDate2" value={walletDate2} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="wallet" required/>
            </div>
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </div>
  )
}

export default InputForm