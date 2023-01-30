import './App.css';

function SignupThird() {
    return (
        <div class="flex w-screen h-screen bg-white items-center content-center"> 
        <div class="w-full max-w-xs mx-auto">
        <div class="text-center">
        <h1 class="text-lg font-semibold">Lastly, connect the socials you post the most written content on</h1>
        <p class="text-md py-4">We recommend Twitter and Substack to start!</p>
        </div>

        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Twitter username or URL"></input>
            </div>

            <div class="mb-4">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Substack username or URL"></input>
            </div>

            <div class="mb-4">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Medium username or URL"></input>
            </div>

            <div class="mb-4">
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Github username or URL"></input>
            </div>
            
            <div class="flex items-center justify-center">
            <a href="#" className="mt-5 drop-shadow-xl inline-block rounded-full bg-indigo-600 px-4 py-1 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                        Generate Wikier
                <span className="text-indigo-200 ml-5" aria-hidden="true">&rarr;</span>
            </a>
            </div>
        </form>
        </div>
        </div>
        );
    }

export default SignupThird;