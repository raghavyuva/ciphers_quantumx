import React from 'react'

function Story() {
    const Data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
    return (
        <div >
            <div className='flex'>
                {Data?.map((el) => {
                    return (
                        <div>
                            <img
                                alt="Woman"
                                src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                                class="mx-8 h-24 w-24 rounded-full object-cover shadow-xl border-4 border-gray-900"
                            />
                            <p className='align-center text-white text-center font-medium'>
                                Manoj Bhat
                            </p>
                            <p className='align-center  text-white text-center text-sm'>
                                Rice Cultivator
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Story