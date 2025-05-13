import React from 'react'
import { useState } from 'react'

import { useForm } from "react-hook-form"
  
const Navbar = () => {
  const [add_question, set_add_question] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm()

  const delay = (d)=>{
    return new Promise((resolve, reject)=>{setTimeout(()=>{resolve()},d*1000);})
  }

  const onSubmit = async (data) => {
    await delay(1)
    console.log(data)

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    fetch('http://localhost:3000', requestOptions)
        // .then(response => response.json())
        // .then(data => this.setState({ postId: data.id }));
  }

  return (

// navbar
    <nav className='p-1 gap-10 sticky top-0 flex items-center justify-around bg-white'>

{/*logo*/}

      <div className='text-blue-500 text-3xl font-bold '>
        <button className='bg-white'>
          LookUp
        </button>
      </div>

{/* home */}
      <div className='flex items-center gap-5'>

          <span>
            <button className='bg-white px-2 py-1 rounded-lg text-xl hover:bg-gray-200 active:bg-gray-300'>
              Home
            </button>
          </span>

{/* category */}
          <span>
            <button className='bg-white px-2 py-1 rounded-lg text-xl hover:bg-gray-200 active:bg-gray-300'>
              Category
            </button>
          </span>

      </div>

{/* search bar */}
      <div className='flex items-center gap-20'>

        <span className='relative'>
          <img src='src/assets/search.png' className="absolute left-3 top-1/2 -translate-y-1/2 w-4" />
          <input type="search" placeholder="LookUp" name="q" className='px-8 py-1 w-[500px] border-2 bg-gray-200 rounded-full hover:bg-gray-300 focus:bg-gray-300 focus:outline-none focus:border-blue-500' img="src/assets/search.png"/>
        </span>

{/* add question */}
        <span>

          <button onClick={() => set_add_question(true)} className='px-5 py-1 rounded-full bg-blue-400 text-white hover:bg-blue-500 active:text-blue-300'>
            Add Question
          </button>

{/* add question => question form */}
          {add_question && (
           <div className="fixed inset-0 bg-black bg-opacity-50 grid place-items-center z-50">
            <div className="bg-white p-3 rounded-lg max-w-3xl w-full">
              
{/* add question => question form:cross button */}
              <button 
                onClick={() => set_add_question(false)} className="p-2 rounded-full bg-white hover:bg-gray-200">
                <img src="src/assets/close.png" alt="" className='w-4'/>
              </button>

{/* add question => question form: form starting */}
              <form action="" onSubmit={handleSubmit(onSubmit)}>

{/* add question => question form: post title */}
                <div className="text-2xl font-bold m-2">Post Title</div>

{/* add question => question form: entering post title */}
                <div className=' w-[46rem] h-[10rem]'>
                <textarea type="text" placeholder='What do you want to LookUp for?' {...register("question", {required: {value: true, message: "Field necessary"}, maxLength: {value: 300, message: "Maximum character limit reached"}})} className='focus:outline-none resize-none px-3 text-lg w-full h-auto' />
                {errors.question && <div className='px-3 text-sm'>{errors.question.message}</div>}
                </div>
{/* add question => question form: post content */}
                <div className='text-xl m-2'>Content</div>

{/* add question => question form: entering post content */}
                <textarea type="text" placeholder='Specifics to LookUp for' {...register("context", {maxLength: {value: 20, message: "Maximum character limit reached"}})} className='focus:outline-none resize-none px-3 w-[46rem] h-[20rem]' />
                {errors.context && <div className='px-3 text-sm'>{errors.context.message}</div>}

{/* add question => question form: bottom buttons */}
                <div className='flex justify-end'>

{/* add question => question form: cancel button */}
                  <button 
                    onClick={() => set_add_question(false)} className="m-1 bg-white rounded-lg p-2 hover:bg-gray-200">
                    Cancel
                  </button>

{/* add question => question form: submit button */}
                  <button 
                    disabled={isSubmitting} className="m-1 bg-blue-400 text-white rounded-lg p-2 hover:bg-blue-500">
                    Submit
                  </button>

                </div>
              </form>

            </div>
          </div> 
        )}
        </span>

      </div>

{/* left icons */}
      <div className='flex items-center gap-5'>

{/* notification icon */}
        <span>
          <button className='bg-white rounded-full p-1 hover:bg-gray-200 active:bg-gray-300 '>
            <img src="src/assets/notification.png" alt="Notification" className='w-7 object-cover' />
          </button>
        </span>

{/* profile icon */}
        <span>
          <button className='bg-white rounded-full p-1 hover:bg-gray-200 active:bg-gray-300 '>
            <img src="src/assets/user.png" alt="Profile" className='w-9 object-cover' />
          </button>
        </span>

      </div>

    </nav>
  )
}

export default Navbar