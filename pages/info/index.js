import Image from "next/image"
import CreateLayout from "../../components/createLayout"
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import Footer from "../../components/footer"
import Link from "next/link"
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useEffect, useState } from "react"




const Info = (props) => {

  const [map, setMap] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  const [location, setLocation] = useState("venue");
  const [current, setCurrent] = useState(false);


  const [locationTags, setLocationTags] = useState([
    {
      tag: "venue",
      current: true
    },
    {
      tag: "online event",
      current: false
    },
    {
      tag: "To be announced",
      current: false
    }
  ]);

  const mapStyles = {
    height: "400px",
    width: "100%"
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        error => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleButtonClick = (event, clickedTag) => {
    event.preventDefault();
    const updatedTags = locationTags.map(tag => ({
      ...tag,
      current: tag.tag === clickedTag ? true : false
    }));
    setLocationTags(updatedTags);
    setLocation(clickedTag);
  };


  // Handle search input change
  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  // Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform search using input value
    // Display search results on the map
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: searchInput }, (results, status) => {
      if (status === 'OK') {
        const { lat, lng } = results[0].geometry.location;
        setSelectedLocation({ lat: lat(), lng: lng() });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  // Handle marker click
  const handleMarkerClick = () => {
    // Calculate distance between selected location and user's current location
    // Display distance to the user
  };



  return(
    <>
      <CreateLayout title="Basic Info">
      <form  className="px-6 lg:px-0">
        <div className="space-y-12 ">
          <div className="border-b border-gray-900/10 pb-12">

            <div className="mt-10 flex flex-col gap-6 ">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full poppins col-span-6">
                <label  className="block text-[16px] font-[400] leading-6 text-gray-900">
                  Event Title :
                </label>
                <div className="flex flex-1 rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                  <input
                    type="text"
                    name=""
                    id=""
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 w-full poppins col-span-6">
                <label  className="block text-[16px] font-[400] leading-6 text-gray-900">
                  Organizer :
                </label>
                <div className="flex flex-1 rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                  <input
                    type="text"
                    name=""
                    id=""
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Title"
                  />
                </div>
              </div>
              <div className=" flex lg:pl-[99px] w-full poppins mt-3 items-center gap-10 sm:gap-20 justify-between">
                <div className="w-full">
                  <select
                    id=""
                    name=""
                    autoComplete="name"
                    className="block w-full bg-white rounded-sm border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus-within:ring-[#333333]  sm:text-sm sm:leading-6 "
                  >
                    <option>Type</option>
                    <option>Entertainment</option>
                    <option>Music</option>
                    <option>Dance</option>
                  </select>
                </div>
                <div className="w-full">
                  <select
                    id=""
                    name=""
                    autoComplete="name"
                    className="block w-full bg-white rounded-sm border-0 py-3 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-inset focus-within:ring-[#333333]  sm:text-sm sm:leading-6 "
                  >
                    <option>Category</option>
                    <option>Entertainment</option>
                    <option>Music</option>
                    <option>Dance</option>
                  </select>
                </div>
              </div>
            
              <div className=" col-span-6 poppins">
                <label htmlFor="username" className="block text-[20px] font-[400] leading-6 text-gray-900">
                  Tags
                </label>
                <div className="text-sm py-1 font-normal leading-tight tracking-tight text-[#858585]">Increase discoverability of your event by adding tags relevant to the subject matter</div>
                <div className="mt-2 flex sm:flex-row flex-col sm:items-center gap-5  ">
                  <div className="flex flex-1 rounded-sm shadow-sm ring-1 col-span-3 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                    <input
                      type="text"
                      name=""
                      id=""
                      autoComplete="username"
                      className="block flex-1 border-0 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="input tags"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-[4px] col-span-1 px-7 py-2 hover:bg-[#D20606] hover:text-white bg-white focus:outline-none focus:ring-2 border border-black text-black hover:border-[#D20606] focus:ring-offset-2"
                    >
                    Add
                  </button>
                </div>
              </div>

              <div className="poppins">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="about"
                    name="about"
                    rows={5}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus-within:ring-[#333333] sm:text-sm sm:leading-6"
                    defaultValue={''}
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Describe the nature of the event</p>
              </div>             
            </div>
          </div>
        </div>
        <div className="py-10 poppins">
          <div className="mx-auto max-w-7xl  ">
            <div className="text-[50px] font-[600] text-gray-900">Location</div>
          </div>
          <div className="text-sm py-3 font-normal mb-6 text-[#858585]">Help people discover your event and attendees know where to show up</div>
          <div className="flex lg:flex-row flex-col lg:items-center gap-8">
            {locationTags.map(( tag)=>(  
              <button
                key={tag}
                onClick={(event) => handleButtonClick(event, tag.tag)}
                className={`rounded-[4px] col-span-1 px-3 py-1 hover:bg-[#D20606] hover:text-white  border  border-[#AEAEAE] 
                ${tag.current ? 'border-[#D20606] text-black' : 'bg-white text-black'} 
                `}
                >
                {tag.tag}
              </button>
            ))}
          </div>

          {/* venue */}
          {location === "venue" ? 
            <div className="mt-10">
              <div className="text-[18px] font-[500] mb-3 text-black">Venue location</div>

              <LoadScript
                googleMapsApiKey="AIzaSyDW9riJPIZV1bh7EY2moNyx0d4nbnO_rO4"
              >

                <form onSubmit={handleFormSubmit} className="flex items-center gap-6 mb-8">
                    <div className=" lg:w-[50%] w-full flex lg:gap-4 gap-2 items-center border border-gray-300  bg-white rounded-sm">
                        <div className="text-[#353434]  ml-4 inset-0 m-auto w-4 h-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search"     width={16} height={16} viewBox="0 0 24 24" strokeWidth={1} stroke="#A0AEC0" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <circle cx={10} cy={10} r={7} />
                                <line x1={21} y1={21} x2={15} y2={15} />
                            </svg>
                        </div>
                        <input 
                          className="bg-white w-full
                          focus:outline-none rounded-sm   
                          text-sm text-black   py-3" 
                          type="text"
                          value={searchInput} 
                          onChange={handleSearchInputChange}
                          placeholder="Search Event"
                        />
                    </div>
                    <button
                      type="submit"
                      onClick={handleFormSubmit}
                      className="rounded-[4px] col-span-1 px-7 py-2 hover:bg-[#D20606] hover:text-white bg-white focus:outline-none focus:ring-2 border border-black text-black hover:border-[#D20606] focus:ring-offset-2"
                      >
                      Search
                    </button>
    
                </form>
                <GoogleMap
                  mapContainerStyle={mapStyles}
                  zoom={10}
                  center={currentLocation || { lat: 9.0820, lng: 8.6753 }} 
                  onLoad={(map) => setMap(map)}
                >
                  {/* Display marker for selected location */}
                  {selectedLocation && (
                    <Marker
                      position={selectedLocation}
                      onClick={handleMarkerClick}
                    />
                  )}
                </GoogleMap>
                
              </LoadScript>


            </div>     
          
            : location === "online event" ?
            <div className="flex flex-1 mt-8 rounded-sm shadow-sm ring-1 col-span-3 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
              <input
                type="text"
                name=""
                id=""
                autoComplete="username"
                className="block flex-1 border-0 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="Embed link "
              />
            </div>

            :
            <div className="py-10 poppins">
              <div className="mx-auto max-w-7xl  ">
                <div className="text-[50px] font-[600] text-gray-900">Date and time</div>
              </div>
              <div className="text-sm py-3 font-normal mb-6 text-[#858585]">create time for the event</div>
              <div className="flex lg:flex-row flex-col lg:items-center gap-8">
                <button
                  type="submit"
                  className="rounded-[4px] col-span-1 px-5 py-2 hover:bg-[#D20606] hover:text-white bg-white focus:outline-none focus:ring-2 border text-black border-[#AEAEAE] focus:ring-offset-2"
                  >
                  Single Event
                </button>
                <button
                  type="submit"
                  className="rounded-[4px] col-span-1 px-5 py-2 hover:bg-[#D20606] hover:text-white bg-white focus:outline-none focus:ring-2 border text-black border-[#AEAEAE] focus:ring-offset-2"
                  >
                  recurring event
                </button>
                
              </div>

              <div className=" mt-8 grid grid-cols-2 gap-8">

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full poppins col-span-1">
                  <label  className="block text-[16px] font-[400] leading-6 text-gray-900">
                    Event starts :
                  </label>
                  <div className="flex flex-1 rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                    <input
                      type="date"
                      name=""
                      id=""
                      className="block flex-1 border-0 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Title"
                    />
                  </div>
                </div>
            
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full poppins col-span-1">
                  <label  className="block text-[16px] font-[400] leading-6 text-gray-900">
                    Start time: 
                  </label>
                  <div className="flex flex-1 rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                    <input
                      type="time"
                      name=""
                      id=""
                      className="block flex-1 border-0 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Title"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full poppins col-span-1">
                  <label  className="block text-[16px] font-[400] leading-6 text-gray-900">
                    Event ends:
                  </label>
                  <div className="flex flex-1 rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                    <input
                      type="date"
                      name=""
                      id=""
                      className="block flex-1 border-0 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Title"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full poppins col-span-1">
                  <label  className="block text-[16px] font-[400] leading-6 text-gray-900">
                    End time:
                  </label>
                  <div className="flex flex-1 rounded-sm shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-[#333333] ">
                    <input
                      type="time"
                      name=""
                      id=""
                      className="block flex-1 border-0 bg-transparent py-2.5 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder="Title"
                    />
                  </div>
                </div>

              </div>
              
              <div className=" flex items-center gap-3 mt-8">
                <input
                  type="checkbox" 
                  className=" accent-[#248227] w-8 h-8"
                />
                <div>
                  <div className=" font-[400] text-[14px] ">Display start time</div>
                  <div className=" font-[400] text-[14px] text-[#858585] ">The start time of the event would be displayed on the platform</div>
                </div>
              </div>
              <div className=" flex items-center gap-3 mt-3">
                <input
                  type="checkbox" 
                  className=" accent-[#248227] w-8 h-8"
                />
                <div>
                  <div className=" font-[400] text-[14px] ">Display end time</div>
                  <div className=" font-[400] text-[14px] text-[#858585] ">The end time of the event would be displayed on the platform</div>
                </div>
              </div>

                
            </div>
          }
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
      </form>
      </CreateLayout>
    </>
  )
}

export default Info




