import React from 'react'

const BlogCard = () => {
  return (
    <div className='card'>
       
<div class="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow">
  <img
    src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
    class="aspect-video w-full object-cover"
    alt=""
  />
  <div class="p-4">
    <p class="mb-1 text-sm text-primary-500"><time></time></p>
    <h3 class="text-xl font-medium text-gray-900"></h3>
    <p class="mt-1 text-gray-500"></p>
    <div class="mt-4 flex gap-2">
     
    <div class="ml-2 flex cursor-pointer items-center gap-x-1 rounded-md border py-2 px-4 hover:bg-gray-100">
          <span class="text-sm font-medium"></span>
        </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default BlogCard