import Swal from 'sweetalert2'

import {useForm} from '../hooks/useForm'

const FetchTest = ({setWalletTest}) => {

    const [inputs, handleChange, reset] = useForm({
        walletAddressTest: '0x5c0db99e9B4BAcD45DF713FA0e8843664A8f9F25'
    })
    const {walletAddressTest} = inputs

    const handleSubmitTest = e => {
        e.preventDefault()
        if(!walletAddressTest.trim()){
            return Swal.fire({
                title: 'Error!',
                text: 'Write a address wallet',
                icon: 'error',
                confirmButtonText: 'Ok'
            })
        }
        setWalletTest(walletAddressTest.trim())
        reset()
    }

    return (
        <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <form className='space-y-6' onSubmit={handleSubmitTest}>
            <h5 className="text-xl font-medium text-gray-900 dark:text-white">Wallet Address</h5>
                <div className="mb-6">
                    <label htmlFor='walletAddressTest' className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Wallet Address</label>
                    <input type="text" name="walletAddressTest" id="walletAddressTest" value={walletAddressTest} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="wallet" required/>
                </div>
                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}
export default FetchTest