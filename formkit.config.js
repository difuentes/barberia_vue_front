import { generateClasses } from '@formkit/themes'

const config = {
    config: {
        classes: generateClasses({
            global: {
                wrapper: 'space-y-2 mb-3',
                message: 'bg-red-500 text-gray-900 text-center text-sm font-bold uppercase p-2 my-5',
                label: 'block mb-1 font-bold text-lg text-black',
                input: 'w-full p-3 border border-red-300 rounded-lg text-gray-700 placeholder-gray-400'
            },
            submit: {
                input: '$reset bg-emerald-800 hover:bg-emerald-400 rounded-lg text-white font-bold w-full p-3 mt-10'
            }
        })
    }
}

export default config