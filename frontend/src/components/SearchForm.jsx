import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, Users, BedDouble, MapPin, Navigation } from 'lucide-react';
import { format, addDays } from 'date-fns';

function SearchForm({ initialValues = {} }) {
  const navigate = useNavigate();
  const today = new Date();
  const tomorrow = addDays(today, 1);
  const nextWeek = addDays(today, 7);

  const [formData, setFormData] = useState({
    origin: initialValues.origin || '',
    destination: initialValues.destination || '',
    checkIn: initialValues.checkIn || format(tomorrow, 'yyyy-MM-dd'),
    checkOut: initialValues.checkOut || format(nextWeek, 'yyyy-MM-dd'),
    people: initialValues.people || 2,
    rooms: initialValues.rooms || 1,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.destination.trim()) {
      alert('Please enter a destination');
      return;
    }
    setIsLoading(true);
    
    const searchParams = new URLSearchParams({
      origin: formData.origin,
      destination: formData.destination,
      checkIn: formData.checkIn,
      checkOut: formData.checkOut,
      people: formData.people.toString(),
      rooms: formData.rooms.toString(),
    });
    
    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="search-box">
        <div className="bg-white rounded-md p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-2">
            {/* Origin - Where from */}
            <div className="relative">
              <div className="flex items-center border-2 border-gray-200 rounded-md px-3 py-2 focus-within:border-primary-500">
                <Navigation className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  name="origin"
                  value={formData.origin}
                  onChange={handleChange}
                  placeholder="From where?"
                  className="w-full outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Destination - Where to */}
            <div className="relative">
              <div className="flex items-center border-2 border-gray-200 rounded-md px-3 py-2 focus-within:border-primary-500">
                <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  placeholder="Where to?"
                  className="w-full outline-none text-gray-700"
                  required
                />
              </div>
            </div>

            {/* Check-in Date */}
            <div className="relative">
              <div className="flex items-center border-2 border-gray-200 rounded-md px-3 py-2 focus-within:border-primary-500">
                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  min={format(today, 'yyyy-MM-dd')}
                  className="w-full outline-none text-gray-700"
                  required
                />
              </div>
            </div>

            {/* Check-out Date */}
            <div className="relative">
              <div className="flex items-center border-2 border-gray-200 rounded-md px-3 py-2 focus-within:border-primary-500">
                <Calendar className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  min={formData.checkIn}
                  className="w-full outline-none text-gray-700"
                  required
                />
              </div>
            </div>

            {/* Guests & Rooms */}
            <div className="relative">
              <div className="flex items-center border-2 border-gray-200 rounded-md px-3 py-2 focus-within:border-primary-500">
                <Users className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
                <select
                  name="people"
                  value={formData.people}
                  onChange={handleChange}
                  className="outline-none text-gray-700 bg-transparent w-1/2"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} Guest{n > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
                <BedDouble className="w-5 h-5 text-gray-400 mx-2 flex-shrink-0" />
                <select
                  name="rooms"
                  value={formData.rooms}
                  onChange={handleChange}
                  className="outline-none text-gray-700 bg-transparent w-1/2"
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n} Room{n > 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className="mt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto bg-primary-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-primary-600 transition-colors flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              {isLoading ? 'Searching...' : 'Search'}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default SearchForm;
