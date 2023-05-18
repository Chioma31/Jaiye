import Image from "next/image"
import Link from "next/link"
import CreateLayout from "../../components/createLayout"
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'



const Details = (props) => {
  return(
    <>
      <CreateLayout title="Details">
        <div className="px-6 lg:px-1 mt-8">
          <div className="text-lg py-1 font-normal leading-tight tracking-tight text-black">Main event image</div>
          <div className="text-sm py-1 font-normal leading-tight tracking-tight text-[#858585]">This is the first image attendees will see at the top of your listing</div>

          <div className="col-span-full">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-[#F0F0F0]">
              <div className="text-center" >
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-semibold text-[#D20606]   "
                  >
                    <span>Upload image</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                  <p className="pl-1">or drag and drop PNG, JPG, GIF</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">  Recommended image size: 2160 x 1080px (5mb)</p>
              </div>
            </div>
          </div>

          <div className="text-lg py-1 mt-10 font-normal leading-tight tracking-tight text-black">Other images</div>
          <div className="text-sm py-1 font-normal leading-tight tracking-tight text-[#858585]">This images will appear in the product detail page</div>

          <div className="grid lg:grid-cols-2 grid-cols-1  gap-5">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-[#F0F0F0]">
              <div className="text-center" >
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-2 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-semibold text-[#D20606] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#D20606] focus-within:ring-offset-2 hover:text-[#D20606]"
                  >
                    <span>Upload image</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                </div>
              </div>
            </div>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 bg-[#F0F0F0]">
              <div className="text-center" >
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-2 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-semibold text-[#D20606] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#D20606] focus-within:ring-offset-2 hover:text-[#D20606]"
                  >
                    <span>Upload image</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="reset" className="text-sm font-semibold leading-6 text-gray-900">
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#D20606] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#9d0606] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D20606]"
            >
              Save
            </button>
            <Link href='/details'  className="text-sm font-semibold leading-6 text-gray-900">
              Next
            </Link>
        </div>
        </div>

      </CreateLayout>
    </>
  )
}

export default Details